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

function handleOrientation(event) {
  const maxTilt = 15;
  const beta = event.beta;   // oldinga/orqaga
  const gamma = event.gamma; // chap/onga

  // Cheklash
  const tiltX = Math.min(Math.max(gamma, -maxTilt), maxTilt);
  const tiltY = Math.min(Math.max(beta, -maxTilt), maxTilt);

  // Siljish (px)
  const moveX = (tiltX / maxTilt) * 10;
  const moveY = (tiltY / maxTilt) * 10;

  const profilePic = document.getElementById("profile-pic");
  if (profilePic) {
    profilePic.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  }
}

if (window.DeviceOrientationEvent) {
  // iOS 13+ uchun ruxsat so‘rash
  if (
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      })
      .catch(console.error);
  } else {
    // Boshqa qurilmalar uchun
    window.addEventListener("deviceorientation", handleOrientation);
  }
} else {
  console.log("DeviceOrientation qo'llab-quvvatlanmaydi.");
}




const wrapper = document.getElementsByClassName("hero-content");
const img = document.getElementsByClassName("hero-image");


  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // O‘rtadan farq (−0.5 dan 0.5 gacha)
    const offsetX = (x / rect.width) - 0.5;
    const offsetY = (y / rect.height) - 0.5;

    const rotateX = offsetY * 15;  // vertikal egilish
    const rotateY = offsetX * 15;  // gorizontal egilish

    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  wrapper.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0deg) rotateY(0deg)";
  });