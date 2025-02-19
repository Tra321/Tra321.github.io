var posts=["2025/02/04/2025-02-04-使用-Github-Pages-和-Hexo-搭建自己的独立博客/","2025/02/06/2025-02-06-Cursor的无限次使用方法/","2025/02/10/2025-02-10-Redis的基础使用命令/","2025/02/08/2025-02-08-自动点亮绿色小方块的git-push机器人/","2025/02/16/2025-02-16-Docker保姆级安装教程/","2025/02/19/2025-02-20-使用Docker-Compose一键部署前后端分离项目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };