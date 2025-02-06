var posts=["2025/02/06/cursor/","2025/02/06/hexo/","2025/02/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };