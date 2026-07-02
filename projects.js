/* ==========================================================================
   projects.js — Project Showcase (3D tilt glass card + live status indicator)
   ========================================================================== */

function renderProjects(lang) {
  const wrap = document.getElementById("project-grid");
  if (!wrap) return;
  const data = SITE_DATA[lang].projects;

  wrap.innerHTML = data.list
    .map(
      (p) => `
      <div class="tilt-card glass">
        <div class="tilt-inner">
          <div class="proj-top">
            <span class="proj-name">${p.name}</span>
            <span class="live-badge"><span class="live-dot"></span>${data.live}</span>
          </div>
          <div class="proj-period">${p.period} · ${p.org}</div>
          <p class="proj-desc">${p.desc}</p>
          <p class="proj-feature">${p.feature}</p>
          <div class="proj-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
          <a class="proj-link" href="${p.link}" target="_blank" rel="noopener">${data.visit}</a>
        </div>
      </div>`
    )
    .join("");

  attachTiltEvents();
}

function attachTiltEvents() {
  const cards = document.querySelectorAll(".tilt-card");
  const MAX_TILT = 10; // derajat maksimum kemiringan 3D

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * MAX_TILT * 2;
      const rotateX = (0.5 - py) * MAX_TILT * 2;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}
