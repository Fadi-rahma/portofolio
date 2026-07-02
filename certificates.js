/* ==========================================================================
   certificates.js — Galeri Sertifikat bisa digeser + 3D Card Flip
   ========================================================================== */

const CERT_ICONS = ["🏆", "🎓", "🛡️", "⭐"];

function renderCertificates(lang) {
  const wrap = document.getElementById("cert-track");
  if (!wrap) return;
  const data = SITE_DATA[lang].certificates;

  wrap.innerHTML = data.list
    .map(
      (c, i) => `
      <div class="cert-scene" data-index="${i}">
        <div class="cert-card">
          <div class="cert-face front glass">
            <div>
              <div class="cert-icon">${CERT_ICONS[i % CERT_ICONS.length]}</div>
              <h4>${c.name}</h4>
              <div class="cert-issuer">${c.issuer}</div>
            </div>
            <div class="cert-hint">${data.flipHint}</div>
          </div>
          <div class="cert-face back glass">
            <div>
              <h4>${c.name}</h4>
              <p>${c.desc}</p>
            </div>
            <a href="${c.link}" target="_blank" rel="noopener">🔗 Lihat Sertifikat / View Certificate</a>
          </div>
        </div>
      </div>`
    )
    .join("");

  attachFlipEvents();
}

function attachFlipEvents() {
  document.querySelectorAll(".cert-scene").forEach((scene) => {
    scene.addEventListener("click", (e) => {
      // Jangan toggle flip ketika mengklik link di sisi belakang
      if (e.target.tagName === "A") return;
      scene.classList.toggle("flipped");
    });
  });
}
