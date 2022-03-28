username = 'usmcamgrimm'
blogURL = `https://dev.to/api/articles?username=${username}`;

function fetchPosts(url) {
  fetch(url)
    .then(response => response.json())
    .then((data) => console.log(data))
}

fetchPosts(blogURL)