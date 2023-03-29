const asciiArt = document.getElementById("ascii-art");
let angle = 0;

function animate() {
  angle += 0.5;
  asciiArt.style.transform = `rotateY(${angle}deg) rotateX(${angle}deg)`;
  requestAnimationFrame(animate);
}

animate();
