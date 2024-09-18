gsap.registerPlugin(ScrollTrigger);
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

gsap.fromTo(
  "#cat",
  { rotation: -20 },
  {
    delay: 6,
    rotation: 20,
    duration: 0.7,
    repeat: Infinity,
    repeatDelay: 5,
    yoyo: true,
  }
);

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
    x: "-50%",
  },
  { x: "50%", duration: 20, delay: 4, repeat: Infinity, ease: "none" }
);

gsap.to("#swipe-down > img", {
  delay: 5,
  y: 10,
  duration: 0.7,
  repeat: Infinity,
  yoyo: true,
});

const button = document.getElementById("swipe-down");

button.addEventListener("click", function () {
  gsap.to(window, {
    duration: 4,
    scrollTo: { y: ".section-two" },
    ease: "power1.inOut",
  });
});

gsap.to("#meet, #gf", {
  scrollTrigger: {
    trigger: "#meet, #gf",
    scrub: 1,
    start: "-80px top",
  },
  "font-size": "0rem",
});

gsap.to(".her > img", {
  scrollTrigger: {
    trigger: ".her > img",
    scrub: true,
    start: "-90px top",
    end: "center top",
  },
  opacity: 0,
});

gsap.to("#heart", {
  scrollTrigger: {
    trigger: "#heart",
    scrub: 1,
    start: "-80px top",
    end: "-30px top",
  },
  y: 90,
  height: 0.2,
});

gsap.to(".section-two", {
  scrollTrigger: {
    trigger: ".section-two",
    scrub: 1,
    start: "top 80%",
    end: "top 10%",
  },
  background:
    "linear-gradient(to top, rgb(119, 0, 132) 0.1%, rgb(0,0,0) 99.9%)",
});

gsap.to(".quotes > div > p", {
  scrollTrigger: {
    trigger: ".quotes > div > p",
    scrub: 1,
    start: "top 80%",
    end: "top 10%",
  },
  color: "black",
});

gsap.to(".carousel", {
  scrollTrigger: {
    trigger: ".carousel",
    scrub: 1,
    start: "top 80%",
    end: "top 10%",
  },
  "border-block": "1px solid rgb(0, 0, 0)",
});

gsap.to("#swipe-down > img", {
  scrollTrigger: {
    trigger: "#swipe-down > img",
    scrub: 1,
    start: "top 80%",
    end: "top 10%",
  },
  height: "0rem",
});

gsap.to(".her-2 img", {
  scrollTrigger: {
    trigger: ".her-2 > img",
    scrub: 1.5,
    start: "top center",
    end: "bottom bottom"
  },
  "filter": "brightness(100%)",
});

const paragraphs = document.querySelectorAll(".text-background p");

// Loop through each paragraph and create animations
paragraphs.forEach(p => {
  // Create a repeating animation with random parameters
  function randomizePositionAndRotation() {
    // Set random position and rotation before the animation begins
    gsap.set(p, {
      x: gsap.utils.random(0, window.innerWidth - p.offsetWidth),  // Random horizontal position
      y: gsap.utils.random(0, (0.65 * window.innerHeight) - p.offsetHeight),               // Random vertical position within the parent height
      rotation: gsap.utils.random(-35, 35)                        // Random rotation between -90 and 90 degrees
    });
  }
  gsap.to(p, {
    duration: gsap.utils.random(1, 2),  // Random duration between 2 and 4 seconds
    opacity: 1,                        // Fade in
    scale: 1.2,                        // Grow slightly
    ease: "power2.out",                // Smooth easing for the fade-in/grow effect
    repeat: -1,
    repeatRefresh: true,                       // Infinite loop
    yoyo: true,                        // Reverse animation (shrink and fade out)
    onStart: randomizePositionAndRotation,
  });
});