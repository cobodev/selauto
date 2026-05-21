const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-motion='reveal']"));

const showElement = (element: HTMLElement) => {
  element.classList.add("is-visible");
};

const setupReveals = () => {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach(showElement);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        showElement(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16
    }
  );

  revealItems.forEach((element) => observer.observe(element));
};

const setupParallax = () => {
  const hero = document.querySelector<HTMLElement>("[data-motion-hero]");
  const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-speed]"));

  if (!hero || reduceMotion.matches || parallaxItems.length === 0) return;

  let ticking = false;

  const update = () => {
    const rect = hero.getBoundingClientRect();
    const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);

    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallaxSpeed ?? 0);
      item.style.setProperty("--parallax-y", `${progress * speed}px`);
    });

    hero.style.setProperty("--hero-copy-y", `${progress * -22}px`);
    hero.style.setProperty("--hero-copy-opacity", `${Math.max(1 - progress * 1.25, 0)}`);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
};

const setupCounters = () => {
  const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-value]"));

  if (counters.length === 0) return;

  const animateCounter = (element: HTMLElement) => {
    const value = element.dataset.countValue ?? "";
    const match = value.match(/^(\d+)(.*)$/);

    if (!match || reduceMotion.matches) {
      element.textContent = value;
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2];
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  };

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
};

setupReveals();
setupParallax();
setupCounters();
