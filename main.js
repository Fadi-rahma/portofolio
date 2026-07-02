/* ==========================================================================
   main.js — Inisialisasi seluruh komponen setelah DOM siap
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Render bagian-bagian dinamis dalam bahasa default (Indonesia)
  renderSkills(currentLang);
  renderExperience(currentLang);
  renderProjects(currentLang);
  renderCertificates(currentLang);

  // Isi data kontak statis (tidak bergantung bahasa)
  const waLink = document.getElementById("contact-wa");
  const emailLink = document.getElementById("contact-email");
  const liLink = document.getElementById("contact-linkedin");
  const ghLink = document.getElementById("contact-github");
  const brandInitials = document.getElementById("brand-initials");

  if (waLink) waLink.href = PROFILE.whatsappLink;
  if (emailLink) emailLink.href = `mailto:${PROFILE.email}`;
  if (liLink) liLink.href = PROFILE.linkedin;
  if (ghLink) ghLink.href = PROFILE.github;
  if (brandInitials) brandInitials.textContent = PROFILE.initials;

  const waText = document.getElementById("contact-wa-text");
  const emailText = document.getElementById("contact-email-text");
  if (waText) waText.textContent = PROFILE.whatsapp;
  if (emailText) emailText.textContent = PROFILE.email;

  // Reveal animation sederhana saat scroll
  const revealTargets = document.querySelectorAll("section .glass, .section-head");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .7s var(--ease), transform .7s var(--ease)";
    observer.observe(el);
  });
});
