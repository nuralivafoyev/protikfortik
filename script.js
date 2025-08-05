document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true  // animatsiya faqat bir marta bajarilsin
  });
});

const speed = 40; 
let i = 0;
function typeWriter() {
  const text = document.querySelector('.typewriter-text').textContent;
  document.querySelector('.typewriter-text').textContent = ''; // matnni tozalaymiz
  function type() {
    if (i < text.length) {
      document.querySelector('.typewriter-text').textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }


  }
  type(); 

}

window.onload = typeWriter;