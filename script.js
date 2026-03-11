fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    let s = document.querySelector(".fff");
    const b = document.createElement("div"); //new element with js?
    b.innerHTML = "ahhh";
    const div = document.createElement("div");
    b.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
    s.appendChild(b);
  })
  .catch((err) => console.error(err));
