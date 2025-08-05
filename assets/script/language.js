const translations = {
  uz: {
    greeting: "Salom, men",
    description: "Frontend Web Dasturchiman",
    view_work: "Ishlarimni ko‘rish",
    portfolio_title: "Ishlarim",
    project1: "ZETMARKET.ORDER",
    project2: "FAST FOOD",
    project3: "ADMIN DASHBOARD",
    footer: "© 2025 Nurali Dev",
    contact_title: "Aloqa",
    contact_description: "Quyidagi forma orqali menga xabar yuborishingiz mumkin:",
    contact_email: "Email: ", 
    contact_send: "Xabar yuborish",
    greating: "Men Nuralibek, Frontend Web Dasturchiman. Dasturlash yolida o'z bilimlarimni oshirish va yangi texnologiyalarni o'rganishga intilaman. Siz bilan ushbu sahifada tanishib chiqishdan mamnunman!"
  },
  en: {
    greeting: "Hi, I'm",
    description: "I'm a Frontend Web Developer",
    view_work: "View My Work",
    portfolio_title: "My Projects",
    project1: "ZETMARKET.ORDER",
    project2: "FAST FOOD",
    project3: "ADMIN DASHBOARD",
    footer: "© 2025 Nurali Dev",
    contact_title: "Contact",
    contact_description: "You can send me a message using the form below:",
    contact_email: "Email: ",
    contact_send: "Send Message",
    greating: "I'm Nuralibek, a Frontend Web Developer. I strive to enhance my knowledge and learn new technologies in the field of programming. I'm glad to meet you on this page!"
  },
  ru: {
    greeting: "Привет, я",
    description: "Я Frontend веб-разработчик",
    view_work: "Посмотреть работы",
    portfolio_title: "Мои проекты",
    project1: "ZETMARKET.ORDER",
    project2: "FAST FOOD",
    project3: "ADMIN DASHBOARD",
    footer: "© 2025 Nurali Dev",
    contact_title: "Контакт",
    contact_description: "Вы можете отправить мне сообщение, используя форму ниже:",
    contact_email: "Email: ",
    contact_send: "Отправить сообщение",
    greating: "Я Нуралибек, Frontend веб-разработчик. Я стремлюсь повысить свои знания и изучить новые технологии в области программирования. Я рад встретить вас на этой странице!"
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
switcher.addEventListener("change", () => {
  const lang = switcher.value;
  applyTranslations(lang);
  localStorage.setItem("lang", lang);  // Tilni saqlaymiz
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "uz";
  switcher.value = savedLang;
  applyTranslations(savedLang);
});