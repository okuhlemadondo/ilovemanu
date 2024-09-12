let loader_tl = gsap.timeline();
let svg_animate = gsap.timeline();

loader_tl
  .fromTo(".preloader", { opacity: 1 }, { delay: 3, duration: 1.5, opacity: 0 })
  .fromTo(
    "#header, #meet, #gf, #swipe",
    { opacity: 0 },
    { duration: 0.75, opacity: 1 }
  )
  .fromTo(
    "#heart, .img-fade, .her",
    { opacity: 0 },
    { duration: 0.75, opacity: 1 }
  )
  .fromTo(".carousel", { opacity: 0 }, { duration: 1.5, opacity: 1 })
  .to("#header > svg", {
    rotation: 360,
    duration: 1,
    repeatDelay: 5,
    ease: "power2.inOut",
    repeat: Infinity,
  });

gsap.to("#heart", {
  delay: 5,
  scale: 0.5,
  duration: 0.7,
  repeat: Infinity,
  yoyo: true,
});

svg_animate.fromTo(
  ".preloader > svg",
  {
    fillOpacity: 0,
    strokeDasharray: 0,
  },
  {
    duration: 4,
    fillOpacity: 1,
    strokeDasharray: 4500,
    ease: "power4.inOut",
  }
);

gsap.fromTo(
  ".quotes",
  {
    x: "-100%",
  },
  { x: "0%", duration: 20, delay: 4, repeat: Infinity, ease: "none" }
);

gsap.to("#swipe-down > img", {
  delay: 5,
  y: 10,
  duration: 0.7,
  repeat: Infinity,
  yoyo: true,
});
