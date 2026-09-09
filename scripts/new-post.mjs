import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const title = args.filter((arg) => arg !== '--dry-run').join(' ').trim();

if (!title) {
  console.error('用法：npm run new -- "文章标题"');
  process.exit(1);
}

const now = new Date();
const parts = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).formatToParts(now);
const value = (type) => parts.find((part) => part.type === type)?.value;
const year = value('year');
const month = value('month');
const day = value('day');
const date = `${year}-${month}-${day}`;
const slug = title
  .normalize('NFKC')
  .replace(/[\\/:*?"<>|#%{}\[\]]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

if (!slug) {
  console.error('文章标题无法生成有效文件名，请换一个标题。');
  process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const template = await readFile(join(projectRoot, 'templates/post.md'), 'utf8');
const legacyPath = `${year}/${month}/${day}/${date}-${slug}`;
const content = template
  .replaceAll('{{title}}', title.replaceAll('"', '\\"'))
  .replaceAll('{{dateTime}}', now.toISOString())
  .replaceAll('{{legacyPath}}', legacyPath);
const destination = join(projectRoot, 'src/content/blog', `${date}-${slug}.md`);

if (dryRun) {
  console.log(`# 将创建：${destination}\n\n${content}`);
  process.exit(0);
}

if (existsSync(destination)) {
  console.error(`文件已存在：${destination}`);
  process.exit(1);
}

await mkdir(dirname(destination), { recursive: true });
await writeFile(destination, content, { encoding: 'utf8', flag: 'wx' });
console.log(`已创建：${destination}`);
console.log('编辑完成后，将 frontmatter 中的 draft 改为 false 即可发布。');
