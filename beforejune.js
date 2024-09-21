gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");
let text_switch = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,

});

gsap.to("span", { "width": "100vw", duration: 1, ease: "cubic", delay: 1 });
gsap.fromTo(".scrollable-content, nav, .manu-bg", { opacity: 0 }, { opacity: 1, duration: 2, ease: "cubic", delay: 1 });
gsap.fromTo(".scrollable-container", { y: 100 }, { y: 0, duration: 1, ease: "cubic", delay: 1 });
gsap.to(".head-logo, .ribbon img", { rotation: 360, duration: 1, repeat: -1, repeatDelay: 5 });

const scrollableDiv = document.querySelector('.scrollable-container');

scrollableDiv.addEventListener('scroll', function () {
    const scrollTop = scrollableDiv.scrollTop; // Pixels scrolled from the top
    const scrollHeight = scrollableDiv.scrollHeight; // Total scrollable content height
    const clientHeight = scrollableDiv.clientHeight; // Visible height of the div

    const scrollProgress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    gsap.to(".manu-bg", { "filter": `brightness(${(100 - scrollProgress) / 100})` });
    gsap.to(".scrollable-container", { "border": `0.5px solid rgba(255, 0, 234, ${1 - ((100 - scrollProgress) / 100)})` });
    gsap.to("span", { "border-top": ` 0.5px solid rgba(255, 0, 234, ${1 - ((100 - scrollProgress) / 100)})` });
});

