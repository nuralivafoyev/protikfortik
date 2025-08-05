window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.app-nav-links a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.app-navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 150) {
    // Pastga scroll va 50px dan oshsa
    navbar.classList.add('hide');
  } else if (scrollTop < lastScrollTop) {
    // Yuqoriga scroll bo‘lsa
    navbar.classList.remove('hide');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

