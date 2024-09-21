gsap.registerPlugin(ScrollTrigger);
let loader_tl = gsap.timeline();
let svg_animate = gsap.timeline();
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden';

// Enable scrolling after 2 seconds
setTimeout(function () {
  document.body.style.overflow = 'auto'; // or 'visible'
  document.documentElement.style.overflow = 'auto';
}, 4000); // 2000 milliseconds = 2 seconds
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
    scrub: 1.8,
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

gsap.to(".her-2 img, .award", {
  scrollTrigger: {
    trigger: ".her-2 > img",
    scrub: 1.5,
    start: "top center",
    end: "bottom bottom"
  },
  "filter": "brightness(100%)",
});

gsap.from(".best-gf button", {
  scrollTrigger: {
    trigger: ".award",
    scrub: 1.5,
    start: "top center",
    end: "top",

  },
  y: 80,
  opacity: 0
});

const words = function () {
  const paragraphs = document.querySelectorAll(".text-background p");
  const triggerElement = document.querySelector('.best-gf button'); // The element to observe
  const animations = []; // Array to store the GSAP tween instances

  // Loop through each paragraph and create animations
  paragraphs.forEach(p => {
    // Function to randomize position and rotation
    function randomizePositionAndRotation() {
      gsap.set(p, {
        x: gsap.utils.random([gsap.utils.random(0 + (p.offsetWidth / 2), 0.25 * window.innerWidth, true), gsap.utils.random(0.6 * window.innerWidth, window.innerWidth - p.offsetWidth, true)]),
        y: gsap.utils.random(0, (0.65 * window.innerHeight) - p.offsetHeight * 2),
        rotation: gsap.utils.random(-17, 17)
      });
    }

    // Create the animation and store the tween instance
    const tween = gsap.to(p, {
      duration: gsap.utils.random(1.2, 2.2),
      opacity: 1,
      scale: 1.2,
      ease: "power2.out",
      repeat: -1,
      repeatRefresh: true,
      yoyo: true,
      onStart: randomizePositionAndRotation,
    });

    animations.push(tween); // Store the tween in the array
  });

  // Intersection Observer to check if the trigger element is in the viewport
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // If the trigger element is not in the viewport, pause all animations
        animations.forEach(tween => {
          tween.pause();
        });
      } else {
        // If the trigger element is in the viewport, resume all animations
        animations.forEach(tween => {
          tween.resume();
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when at least 10% of the element is visible
  });

  observer.observe(triggerElement); // Start observing the trigger element
};

// Call the function to set up animations
words();


// Create an array to store the tween instances
const tweens = [];

// Create the tweens and store them in the array
tweens.push(
  gsap.to("#heart", {
    delay: 5,
    scale: 0.5,
    duration: 0.7,
    repeat: Infinity,
    yoyo: true,
  })
);

tweens.push(
  gsap.fromTo(
    ".quotes",
    { x: "-50%" },
    { x: "50%", duration: 20, delay: 4, repeat: Infinity, ease: "none" }
  )
);

tweens.push(
  gsap.to("#swipe-down > img", {
    delay: 5,
    y: 10,
    duration: 0.7,
    repeat: Infinity,
    yoyo: true,
  })
);

// Define the element to observe
const triggerElement = document.querySelector('.her'); // Replace with your selector

// Intersection Observer callback
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // If the trigger element is not in the viewport, pause all tweens
      tweens.forEach(tween => {
        tween.pause();
      });
    } else {
      // If the trigger element is in the viewport, resume all tweens
      tweens.forEach(tween => {
        tween.resume();
      });
    }
  });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(observerCallback, {
  root: null, // Use the viewport as the root
  threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Start observing the trigger element
observer.observe(triggerElement);

window.onbeforeunload = function () {
  window.scrollTo(0, 0); // Scroll to top-left corner (x = 0, y = 0)
};