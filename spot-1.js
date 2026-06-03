const SHEET_ID = "1FXMd5GjyPLpIsyGTScVMNQD5dsMsnZE_Z-VY4dCkQ98";

fetch(`https://opensheet.elk.sh/${SHEET_ID}/ALL`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

const params = new URLSearchParams(window.location.search);
let slug = params.get("slug");
slug = "?slug=ss";

window.history.pushState({}, "", `re-rites-of-passage${slug}`);

async function loadData() {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2P6HXHcAFH4b_rvDegEIXGPgyGMIJYJpHhmY1UYU4Z376GydGsyG3rmtPeJIDoMNL9g-x2rzBbrMc/pub?output=csv",
  );
  const text = await response.text();
  console.log(text);
}
loadData();

async function fetchSheetData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const csvData = await response.text();
    console.log("Raw CSV Data:", csvData);

    const rows = csvData.split("\n").map((row) => row.split(","));
    console.table(rows);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

fetchSheetData(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2P6HXHcAFH4b_rvDegEIXGPgyGMIJYJpHhmY1UYU4Z376GydGsyG3rmtPeJIDoMNL9g-x2rzBbrMc/pub?output=csv",
);

//fix the slugs siutation -->

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
