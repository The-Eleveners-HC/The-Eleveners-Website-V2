(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const btn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  applyTheme(saved || "light");

  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }
})();
