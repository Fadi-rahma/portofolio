/* ==========================================================================
   orbit.js — Visualisasi Jaringan Node 3D (Hero Section)
   Node-node saling terhubung, berputar perlahan mengelilingi pusat (efek
   pseudo-3D dengan skala/opacity berbasis kedalaman "z"), dan bereaksi
   terhadap kursor (magnetic effect: node terdekat tertarik ke mouse).
   ========================================================================== */

(function initOrbit() {
  const canvas = document.getElementById("orbit-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, dpr;
  let mouse = { x: null, y: null, active: false };

  const NODE_COUNT = 26;
  const nodes = [];
  let angle = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createNodes() {
    nodes.length = 0;
    const radius = Math.min(width, height) * 0.36;
    for (let i = 0; i < NODE_COUNT; i++) {
      // Distribusi bola semu (sphere-like) memakai koordinat spherical acak
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.55 + Math.random() * 0.45);
      nodes.push({
        theta,
        phi,
        r,
        baseR: r,
        offsetX: 0,
        offsetY: 0,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function project(node) {
    // Rotasi lambat pada sumbu Y (theta bertambah seiring waktu)
    const t = node.theta + angle;
    const x = node.r * Math.sin(node.phi) * Math.cos(t);
    const y = node.r * Math.cos(node.phi);
    const z = node.r * Math.sin(node.phi) * Math.sin(t);
    const scale = (z + node.r) / (2 * node.r); // 0 (belakang) - 1 (depan)
    return {
      x: width / 2 + x + node.offsetX,
      y: height / 2 + y + node.offsetY,
      scale: 0.4 + scale * 0.9,
      depth: scale
    };
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    angle += 0.0022;

    const projected = nodes.map((n) => {
      // Magnetic effect: node yang dekat kursor sedikit tertarik ke arah mouse
      if (mouse.active) {
        const p = project({ ...n, offsetX: 0, offsetY: 0 });
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - dist / 160);
        n.offsetX += (dx * influence * 0.18 - n.offsetX) * 0.12;
        n.offsetY += (dy * influence * 0.18 - n.offsetY) * 0.12;
      } else {
        n.offsetX *= 0.9;
        n.offsetY *= 0.9;
      }
      return project(n);
    });

    // Garis penghubung antar node terdekat (jaring/network look)
    ctx.lineWidth = 1;
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = projected[i];
        const b = projected[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.35 * ((a.depth + b.depth) / 2 + 0.2);
          ctx.strokeStyle = `rgba(192, 132, 252, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Gambar node, urutkan dari belakang ke depan agar depth terasa benar
    projected
      .map((p, idx) => ({ ...p, node: nodes[idx] }))
      .sort((a, b) => a.depth - b.depth)
      .forEach(({ x, y, scale, depth, node }) => {
        node.pulse += 0.02;
        const pulseScale = 1 + Math.sin(node.pulse) * 0.08;
        const size = (2.2 + depth * 3.2) * scale * pulseScale;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
        grad.addColorStop(0, `rgba(233, 213, 255, ${0.9 * (0.4 + depth * 0.6)})`);
        grad.addColorStop(0.4, `rgba(192, 132, 252, ${0.5 * (0.3 + depth * 0.7)})`);
        grad.addColorStop(1, "rgba(192, 132, 252, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${0.55 + depth * 0.45})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

    requestAnimationFrame(draw);
  }

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  canvas.addEventListener("mouseleave", () => { mouse.active = false; });

  window.addEventListener("resize", () => {
    resize();
    createNodes();
  });

  resize();
  createNodes();
  draw();
})();
