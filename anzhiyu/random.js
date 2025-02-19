var posts=["2025/02/17/2025-2-17-Docker/","2025/02/05/2025-2-5-Hexo/","2025/02/06/2025-2-6-Cursor/","2025/02/07/2025-2-7-Auto-green/","2025/02/08/2025-2-8-Redis/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };