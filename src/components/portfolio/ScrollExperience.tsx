import { useEffect } from "react";

export function ScrollExperience() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let disposed = false;
    let cleanup = () => {};

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (disposed) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.to("[data-scroll-progress]", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "max", scrub: 0.15 } });
        const media = gsap.matchMedia();

        media.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .from("[data-hero-kicker]", { y: 18, autoAlpha: 0, duration: 0.55 })
            .from("[data-hero-title]", { yPercent: 18, rotateX: -8, autoAlpha: 0, duration: 1 }, "-=0.25")
            .from("[data-hero-copy]", { y: 24, autoAlpha: 0, duration: 0.65, stagger: 0.08 }, "-=0.55")
            .from("[data-hero-portrait]", { clipPath: "inset(100% 0 0 0)", scale: 1.08, duration: 1.05 }, "-=0.9");

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            const delay = Number(element.dataset.delay || 0) / 1000;
            gsap.fromTo(element, { y: 46, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85, delay, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
          });

          gsap.utils.toArray<HTMLElement>("main section h2").forEach((title) => {
            gsap.fromTo(title, { yPercent: 30, rotateX: -12, transformOrigin: "50% 100%" }, { yPercent: 0, rotateX: 0, ease: "none", scrollTrigger: { trigger: title, start: "top 95%", end: "top 58%", scrub: true } });
          });

          gsap.fromTo("[data-skill-card]", { y: 110, rotateX: -28, autoAlpha: 0, transformOrigin: "50% 100%" }, { y: 0, rotateX: 0, autoAlpha: 1, stagger: 0.09, duration: 1.15, ease: "power4.out", scrollTrigger: { trigger: ".skill-grid", start: "top 82%", once: true } });

          gsap.fromTo("[data-about-word]", { scale: 1.12, xPercent: -4 }, { scale: 0.96, xPercent: 4, ease: "none", scrollTrigger: { trigger: "[data-about-stage]", start: "top bottom", end: "bottom top", scrub: 0.8 } });
          gsap.fromTo("[data-about-photo]", { yPercent: 10, scale: 1.04 }, { yPercent: -4, scale: 1, ease: "none", scrollTrigger: { trigger: "[data-about-stage]", start: "top bottom", end: "bottom top", scrub: 0.8 } });

          gsap.utils.toArray<HTMLElement>("#projetos article").forEach((article) => {
            const image = article.querySelector("img");
            if (!image) return;
            gsap.fromTo(image, { scale: 1.14, yPercent: -3 }, { scale: 1, yPercent: 3, ease: "none", scrollTrigger: { trigger: article, start: "top bottom", end: "bottom top", scrub: 0.7 } });
          });
        });

        media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
          gsap.to("[data-hero-title]", { yPercent: -18, scale: 0.94, transformOrigin: "left top", ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 0.8 } });
          gsap.to("[data-hero-portrait]", { yPercent: 18, rotate: 2, ease: "none", scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: 0.8 } });
        });

        cleanup = () => media.revert();
      });

      const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120);
      const previousCleanup = cleanup;
      cleanup = () => { window.clearTimeout(refresh); previousCleanup(); context.revert(); };
    });

    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="motion-shell" aria-hidden="true"><div className="motion-scanline" /><div className="motion-vignette" /><div className="motion-hud motion-hud-left">PORTFOLIO / 2026</div><div className="motion-hud motion-hud-right">SCROLL TO EXPLORE</div><div className="motion-progress"><span data-scroll-progress /></div></div>;
}
