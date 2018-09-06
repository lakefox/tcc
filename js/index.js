let posts = ["https://www.instagram.com/p/BnAVjlZBw3U/?taken-by=thechurchcomp"];

for (let i = 0; i < posts.length; i++) {
  fetch(`https://api.instagram.com/oembed/?url=${posts[i]}`)
    .then((json) => {
      return json.json();
    }).then((res) => {
      posts[i] = res.html.split(`<script async defer src="//www.instagram.com/embed.js"></script>`)[0];
      if (i == posts.length-1) {
        renderPosts();
      }
    });
}
function renderPosts() {
  console.log("Rendering");
  document.querySelector("#instafeed").innerHTML = posts.join("");
}
