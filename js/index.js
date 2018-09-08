let posts = ["https://www.instagram.com/p/BnAVjlZBw3U/?taken-by=thechurchcomp"];

for (let i = 0; i < posts.length; i++) {
  fetch(`https://api.instagram.com/oembed/?url=${posts[i]}`)
    .then((json) => {
      return json.json();
    }).then((res) => {
      document.querySelector("#instafeed").innerHTML += res.html;
      if (i == posts.length-1) {
        renderPosts();
      }
    });
}
function renderPosts() {
  console.log("Rendering");
  fetch("/js/embed.js").then((js) => {
    return js.text();
  }).then((res) => {
    eval(res);
  })
}
