# Atra Blog

基于 Astro 的个人技术博客，由旧版 Hexo 站点迁移而来。

原站的 10 篇文章已经恢复为可直接编辑的 Markdown，旧文章路径保持不变；正文图片存放在 `public/images/posts/`，不再依赖原有 jsDelivr 图床。

## 本地开发

```bash
nvm use
npm install
npm run dev
```

浏览器打开 `http://localhost:4321`。

## 新增文章

运行下面的命令，根据模板自动创建一篇草稿：

```bash
npm run new -- "我的文章标题"
```

新文章会出现在 `src/content/blog/`。打开文件后修改摘要、分类、标签和正文，完成后将 `draft: true` 改为 `draft: false`。

也可以复制 `templates/post.md` 手动创建。文章格式如下：

```md
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-09-09
category: "开发"
tags: ["Astro", "JavaScript"]
legacyPath: "2026/09/09/article-slug"
draft: true
---

正文内容……
```

## 构建与部署

```bash
npm run check
npm run build
npm run preview
```

发布文章的完整流程：

```bash
npm run new -- "文章标题"
# 编辑文章并将 draft 改成 false
npm run dev
git add .
git commit -m "post: 文章标题"
git push
```

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动检查、构建并发布到 GitHub Pages。首次使用时，需要在仓库的 **Settings → Pages → Build and deployment** 中把 Source 设置为 **GitHub Actions**。
