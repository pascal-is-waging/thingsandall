const SHEET_ID = "1aWl4zx1xShGkplD9Glm6iW3LiRHg7m_zBztzmn3NvGA";

fetch(
  `https://opensheet.elk.sh/1Km1had78v2jOwEJU0qGKknrBSOaY-z-L-LJ-dC7pbBM/ALL`,
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

const params = new URLSearchParams(window.location.search);
let slug = params.get("slug");
console.log(slug);
slug = "?slug=ss";

window.history.pushState({}, "", `re-rites-of-passage/${slug}`);

// fetch(`https://opensheet.elk.sh/${SHEET_ID}/ALL`)
//   .then((res) => res.json())
//   .then((data) => {
//     let g = Object.values(data[0]);
//     console.log(g);
//     console.log("in the fetch");
//     let s = document.querySelector(".fff");
//     const b = document.createElement("div"); //new element with js?
//     b.innerHTML = "ahhh";
//     const div = document.createElement("div");
//     // const url = getDriveImageUrl(`${g[9]}`);
//     b.innerHTML = `
//       <h2>${g[1]}</h2>
//       <img src="${url}"></img>
//     `;
//     s.appendChild(b);
//   });

// function getDriveImageUrl(driveLink) {
//   const match = driveLink.match(/[?&]id=([^&]+)/);
//   if (!match) return null;

//   const fileId = match[1];
//   return `https://drive.google.com/uc?export=view&id=${fileId}`;
// }
