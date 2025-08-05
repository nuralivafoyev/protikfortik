  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
  }

  // Sahifa yuklanganda to‘g‘ri ikonani ko‘rsatish
  window.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const theme = html.getAttribute("data-theme") || "dark";
    html.setAttribute("data-theme", theme); // Triggers the correct state on load
  });