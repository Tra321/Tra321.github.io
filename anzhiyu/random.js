var posts=["2025/02/17/2025-2-17-Docker/","2025/02/08/Redis/","2025/02/07/auto-green/","2025/02/06/hello-world/","2025/02/06/hexo/","2025/02/06/cursor/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };