const SHEET_ID = "1aWl4zx1xShGkplD9Glm6iW3LiRHg7m_zBztzmn3NvGA";

fetch(`https://opensheet.elk.sh/${SHEET_ID}/Form Responses 1`)
  .then((res) => res.json())
  .then((data) => {
    let g = Object.values(data[0]);
    console.log("in the fetch");
    let s = document.querySelector(".fff");
    const b = document.createElement("div"); //new element with js?
    b.innerHTML = "ahhh";
    const div = document.createElement("div");
    b.innerHTML = `
      <h2>${g[1]}</h2>
      <img src="${g[9]}"></img>
    `;
    s.appendChild(b);
  });
