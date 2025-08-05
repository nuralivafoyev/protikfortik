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

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', (event) => {
    const { beta, gamma } = event; // beta: oldinga/orqaga, gamma: chap/onga burilish

    // Biroz cheklovlar va harakat miqdori
    const maxTilt = 15; // maksimal burilish darajasi
    const tiltX = Math.min(Math.max(gamma, -maxTilt), maxTilt); // chap/onga
    const tiltY = Math.min(Math.max(beta, -maxTilt), maxTilt); // oldinga/orqaga

    const profilePic = document.getElementsByClassName('hero-image');
    if (profilePic) {
      // Transform orqali biroz siljitim qo‘shamiz (masalan, max 10px)
      const moveX = (tiltX / maxTilt) * 10; 
      const moveY = (tiltY / maxTilt) * 10;

      profilePic.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  });
}