/* ==========================================================================
   bento.js — Bento Grid Keahlian (hover expand) + statistik kemahiran
   Setiap kartu kategori meluas mulus saat di-hover, menampilkan progress
   bar neon 3D untuk tiap sub-keahlian / bahasa.
   ========================================================================== */

function buildSkillRows(items) {
  return items
    .map(
      (item) => `
      <div class="skill-row">
        <div class="s-label"><span>${item.name}</span><span>${item.level}%</span></div>
        <div class="s-track"><div class="s-fill" data-level="${item.level}"></div></div>
      </div>`
    )
    .join("");
}

function renderSkills(lang) {
  const wrap = document.getElementById("bento-grid");
  if (!wrap) return;
  const data = SITE_DATA[lang].skills;

  wrap.innerHTML = data.categories
    .map(
      (cat) => `
      <div class="bento-card glass" data-cat="${cat.id}">
        <div class="b-icon">${cat.icon}</div>
        <h3>${cat.title}</h3>
        <p class="b-summary">${cat.summary}</p>
        <div class="b-details">${buildSkillRows(cat.items)}</div>
      </div>`
    )
    .join("");

  const noteEl = document.getElementById("skills-note");
  if (noteEl) noteEl.textContent = data.note;

  attachBentoEvents();
}

function animateFills(card) {
  card.querySelectorAll(".s-fill").forEach((fill) => {
    const level = fill.getAttribute("data-level");
    // reset lalu set ulang supaya transition width selalu terpicu
    fill.style.width = "0%";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.width = `${level}%`;
      });
    });
  });
}

function attachBentoEvents() {
  const cards = document.querySelectorAll(".bento-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("expanded");
      animateFills(card);
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("expanded");
    });
    // Dukungan tap di perangkat sentuh
    card.addEventListener("click", () => {
      const isExpanded = card.classList.contains("expanded");
      cards.forEach((c) => c.classList.remove("expanded"));
      if (!isExpanded) {
        card.classList.add("expanded");
        animateFills(card);
      }
    });
  });
}

function renderExperience(lang) {
  const wrap = document.getElementById("exp-grid");
  if (!wrap) return;
  const data = SITE_DATA[lang].experience;
  wrap.innerHTML = data.items
    .map((item) => `<div class="exp-card glass"><h4>${item.title}</h4><p>${item.desc}</p></div>`)
    .join("");

  const moreText = document.getElementById("exp-more-text");
  const moreLink = document.getElementById("exp-more-link");
  if (moreText) moreText.textContent = data.more;
  if (moreLink) moreLink.href = data.moreLink;
}
