const images = [
  "https://freight.cargo.site/t/original/i/1e49d79c4bebdf48753fe2c667c48e5f6e241f96a26d4669e460af1216627bc0/jar.png",
  "https://freight.cargo.site/t/original/i/8acf373495923675f4abf247794743e4bda79a8c31bf232944710c17216d2c9d/cd-alt.png",
];

const SIZE = 300;
let zIndexCounter = 1;

function randPos() {
  return {
    x: Math.random() * (window.innerWidth - SIZE),
    y: Math.random() * (window.innerHeight - SIZE),
  };
}

function makeDraggable(element) {
  let isDragging = false;
  let hasDragged = false;

  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;

  const DRAG_THRESHOLD = 5;

  element.addEventListener("pointerdown", (e) => {
    isDragging = true;
    hasDragged = false;

    startX = e.clientX;
    startY = e.clientY;

    initialLeft = parseFloat(element.style.left) || 0;
    initialTop = parseFloat(element.style.top) || 0;

    // Bring to front
    element.style.zIndex = ++zIndexCounter;

    element.setPointerCapture(e.pointerId);

    e.preventDefault();
  });

  element.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (!hasDragged && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      hasDragged = true;
    }

    if (!hasDragged) return;

    let left = initialLeft + dx;
    let top = initialTop + dy;

    // Keep inside viewport
    left = Math.max(0, Math.min(left, window.innerWidth - element.offsetWidth));

    top = Math.max(0, Math.min(top, window.innerHeight - element.offsetHeight));

    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
    e.preventDefault();
  });

  element.addEventListener("pointerup", () => {
    isDragging = false;
    e.preventDefault();
  });

  element.addEventListener("pointercancel", () => {
    isDragging = false;
    e.preventDefault();
  });

  // Prevent popup opening after dragging
  element.addEventListener(
    "click",
    (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true,
  );
}

// Create images
images.forEach((src, index) => {
  const pos = randPos();

  const img = document.createElement("img");

  img.className = "img popup-trigger";
  img.src = src;
  img.dataset.popup = `popup${index + 1}`;

  img.style.position = "absolute";
  img.style.left = `${pos.x}px`;
  img.style.top = `${pos.y}px`;

  document.getElementById("stage").appendChild(img);

  makeDraggable(img);
});
