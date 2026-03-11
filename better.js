const SHEET_ID = "1ThK2AhETarR8HuYoTCNmPFaAL_Kf--cT0BPPSiCQtCo";

fetch(`https://opensheet.elk.sh/${SHEET_ID}/Form Responses 1`)
  .then((res) => res.json())
  .then((data) => console.log(data));
