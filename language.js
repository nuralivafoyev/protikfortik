const translations = {
  uz: {
    greeting: "Salom, men",
    description: "Frontend Web Dasturchiman",
    view_work: "Ishlarimni ko‘rish",
    portfolio_title: "Ishlarim",
    project1: "ZETMARKET.ORDER",
    project2: "FAST FOOD",
    project3: "ADMIN DASHBOARD",
    footer: "© 2025 Nurali Dev"
  },
  en: {
    greeting: "Hi, I'm",
    description: "I'm a Frontend Web Developer",
    view_work: "View My Work",
    portfolio_title: "My Projects",
    project1: "ZETMARKET.ORDER",
    project2: "FAST FOOD",
    project3: "ADMIN DASHBOARD",
    footer: "© 2025 Nurali Dev"
  },
  ru: {
    greeting: "Привет, я",
    description: "Я Frontend веб-разработчик",
    view_work: "Посмотреть работы",
    portfolio_title: "Мои проекты",
    project1: "ZETMARKET.ORDER",
    project2: "FAST FOOD",
    project3: "ADMIN DASHBOARD",
    footer: "© 2025 Nurali Dev"
  }
};

const switcher = document.getElementById("language-switcher");

switcher.addEventListener("change", () => {
  const lang = switcher.value;
  applyTranslations(lang);
});

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Sahifa yuklanganda default til
window.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "uz";
  switcher.value = defaultLang;
  applyTranslations(defaultLang);
});
