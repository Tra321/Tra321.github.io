var posts=["2025/02/06/cursor/","2025/02/08/Redis/","2025/02/07/auto-green/","2025/02/06/hello-world/","2025/02/06/hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };