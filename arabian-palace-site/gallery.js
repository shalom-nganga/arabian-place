(() => {
  const pg = document.querySelector('.pg');
  const lb = document.querySelector('#lightbox');
  if (!pg || !lb) return;

  const items = [...pg.querySelectorAll('.g-item[data-type]')];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  pg.classList.add('is-ready');

  /* 1. tiles rise in one after another */
  const revealer = new IntersectionObserver((entries) => {
    let n = 0;
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.setProperty('--d', n++);
      entry.target.classList.add('in');
      revealer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  pg.querySelectorAll('.g-item').forEach((el) => revealer.observe(el));

  /* 2. videos play silently while on screen, pause when off screen */
  const inView = new Set();
  const player = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) inView.add(target); else inView.delete(target);
      if (isIntersecting && !calm && !lb.open) target.play().catch(() => {});
      else target.pause();
    });
  }, { threshold: 0.35 });
  pg.querySelectorAll('video').forEach((v) => player.observe(v));

  /* 3. gentle depth: pictures drift a little as you scroll */
  if (!calm) {
    const tiles = [...pg.querySelectorAll('.g-item:not(.g-insta)')];
    let queued = false;
    const drift = () => {
      queued = false;
      const h = innerHeight;
      tiles.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > h) return;
        const t = Math.max(-1, Math.min(1, (r.top + r.height / 2 - h / 2) / h));
        el.style.setProperty('--py', (-t * 14).toFixed(1) + 'px');
      });
    };
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(drift); } }, { passive: true });
    addEventListener('resize', drift);
    drift();
  }

  /* 4. viewer */
  const stage = lb.querySelector('.lb-stage');
  const caption = lb.querySelector('.lb-caption');
  const count = lb.querySelector('.lb-count');
  let current = 0;

  function show(n) {
    current = (n + items.length) % items.length;
    const item = items[current];
    const { type, src, caption: text, alt } = item.dataset;
    let media;
    if (type === 'video') {
      media = document.createElement('video');
      media.src = src;
      media.poster = item.querySelector('video').getAttribute('poster') || '';
      media.controls = true;
      media.autoplay = true;
      media.loop = true;
      media.playsInline = true;
    } else {
      media = document.createElement('img');
      media.src = src;
      media.alt = alt || text;
    }
    stage.replaceChildren(media);
    caption.textContent = text;
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    const next = items[(current + 1) % items.length];
    if (next.dataset.type === 'image') new Image().src = next.dataset.src; // warm the next photo
  }

  items.forEach((item, n) => item.addEventListener('click', () => {
    pg.querySelectorAll('video').forEach((v) => v.pause());
    show(n);
    lb.showModal();
  }));

  lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target === stage) lb.close(); });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  lb.addEventListener('close', () => {
    stage.replaceChildren(); // stops any video
    if (!calm) inView.forEach((v) => v.play().catch(() => {}));
  });

  // swipe left/right on photos (videos keep their own controls)
  let startX = 0, startY = 0, tracking = false;
  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || e.target.tagName === 'VIDEO') return;
    tracking = true; startX = e.clientX; startY = e.clientY;
  });
  stage.addEventListener('pointerup', (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
  });
  stage.addEventListener('pointercancel', () => { tracking = false; });
})();