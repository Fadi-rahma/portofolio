/* ==========================================================================
   lang.js — Bilingual switch (Indonesia <-> Inggris) tanpa reload halaman
   Tombol kapsul 3D melakukan flip animation saat diklik, lalu seluruh
   elemen dengan atribut [data-i18n] diperbarui teksnya secara instan.
   ========================================================================== */

let currentLang = "id";

function getValueByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function applyTranslations(lang) {
  const dict = SITE_DATA[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n");
    const value = getValueByPath(dict, path);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });
  document.documentElement.setAttribute("lang", lang === "id" ? "id" : "en");
  document.body.setAttribute("data-lang", lang);
}

function switchLanguage() {
  currentLang = currentLang === "id" ? "en" : "id";
  const btn = document.getElementById("lang-switch");
  btn.classList.toggle("flipped", currentLang === "en");
  applyTranslations(currentLang);

  // Re-render bagian yang dibangun secara dinamis lewat JS (bukan lewat data-i18n saja)
  if (typeof renderSkills === "function") renderSkills(currentLang);
  if (typeof renderExperience === "function") renderExperience(currentLang);
  if (typeof renderProjects === "function") renderProjects(currentLang);
  if (typeof renderCertificates === "function") renderCertificates(currentLang);
}

function initLangSwitch() {
  const btn = document.getElementById("lang-switch");
  if (!btn) return;
  btn.addEventListener("click", switchLanguage);
  applyTranslations(currentLang);
}

document.addEventListener("DOMContentLoaded", initLangSwitch);
