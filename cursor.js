/* ==========================================================================
   cursor.js — Custom Glowing Cursor Follower
   Menyembunyikan kursor asli, digantikan lingkaran glow ungu yang mengikuti
   mouse dengan easing, dan melebar otomatis saat hover elemen interaktif.
   ========================================================================== */

(function initCursor() {
  const glow = document.getElementById("cursor-glow");
  const dot = document.getElementById("cursor-dot");
  if (!glow || !dot) return;
  if (window.matchMedia("(hover: none)").matches) return; // skip on touch devices

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function animate() {
    // Easing membuat glow "mengejar" posisi mouse — terasa lebih halus & premium
    glowX += (mouseX - glowX) * 0.16;
    glowY += (mouseY - glowY) * 0.16;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animate);
  }
  animate();

  const interactiveSelector = "a, button, .bento-card, .tilt-card, .cert-scene, .lang-switch, input, textarea, .contact-chip";

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      glow.classList.add("expand");
    }
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      glow.classList.remove("expand");
    }
  });

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
    dot.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    glow.style.opacity = "1";
    dot.style.opacity = "1";
  });
})();
