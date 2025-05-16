function generatePumpkin() {
  const canvas = document.getElementById("pumpkinCanvas");
  const ctx = canvas.getContext("2d");

  // Рисуем простенькую тыкву
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = getRandomColor();
  ctx.beginPath();
  ctx.ellipse(150, 150, 100, 70, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#000";
  ctx.fillRect(145, 80, 10, 20); // черенок
}

function getRandomColor() {
  const colors = ["#f44336", "#ff9800", "#ffeb3b", "#8bc34a"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function savePumpkin() {
  const canvas = document.getElementById("pumpkinCanvas");
  const dataURL = canvas.toDataURL();
  let saved = JSON.parse(localStorage.getItem("pumpkins") || "[]");
  saved.push(dataURL);
  localStorage.setItem("pumpkins", JSON.stringify(saved));
  alert("Тыква сохранена!");
}

// Загрузка сохранённых тыкв на странице галереи
window.onload = () => {
  if (document.getElementById("savedPumpkins")) {
    const saved = JSON.parse(localStorage.getItem("pumpkins") || "[]");
    const container = document.getElementById("savedPumpkins");
    saved.forEach(imgSrc => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.width = 100;
      container.appendChild(img);
    });
  }

  // Переключатель темы
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }
};
