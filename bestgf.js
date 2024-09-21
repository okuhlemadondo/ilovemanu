gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");
let text_switch = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,

});

text_switch
    .to(".sentence-container",
        {
            "clip-path": "polygon(0 0%, 100% 100%, 100% 100%, 0% 100%)",
            duration: 0.5,
            onReverseComplete: function () {
                swapZIndexes();
            }
        }).to(".sentence-container",
            {
                "clip-path": "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.5,

            }
        )

function swapZIndexes() {
    const box1 = document.querySelector(".sentence-1");
    const box2 = document.querySelector(".sentence-2");

    // Get current z-index values
    const zIndex1 = window.getComputedStyle(box1).zIndex;
    const zIndex2 = window.getComputedStyle(box2).zIndex;
    const opacity1 = window.getComputedStyle(box1).opacity;
    const opacity2 = window.getComputedStyle(box2).opacity;

    // Swap z-index values
    box1.style.zIndex = zIndex2;
    box2.style.zIndex = zIndex1;
    box1.style.opacity = opacity2;
    box2.style.opacity = opacity1;
}

let isAnimating = false;

function splitTextIntoSpans(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        let text = element.innerText;
        let splitText = text
            .split("")
            .map(function (char) {
                return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
            })
            .join("");
        element.innerHTML = splitText;
    });
}

function initCards() {
    let cards = Array.from(document.querySelectorAll(".card"));
    gsap.to(cards,
        {
            y: (i) => -10 + 10 * i + "%",
            z: (i) => 10 * i,
            duration: 1,
            ease: "cubic",
            stagger: 0.1
        }
    )
}

document.addEventListener("DOMContentLoaded", function () {
    splitTextIntoSpans(".copy h1");
    initCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:last-child h1 span", { y: 0 });

    document.addEventListener("click", function () {
        if (isAnimating) return;
        isAnimating = true;
        let slider = document.querySelector(".slider");
        let cards = Array.from(slider.querySelectorAll(".card"));
        let lastCard = cards.pop();
        let nextCard = cards[cards.length - 1];

        gsap.to(lastCard.querySelectorAll("h1 span"), {
            y: 200,
            duration: 1,
            ease: "cubic",

        });

        gsap.to(lastCard, {
            y: "+=150%",
            duration: 0.75,
            ease: "cubic",
            onComplete: () => {
                slider.prepend(lastCard);
                initCards();
                gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

                setTimeout(() => {
                    isAnimating = false;
                }, 1000);
            },
        });

        gsap.to(nextCard.querySelectorAll("h1 span"), {
            y: 0,
            duration: 1,
            ease: "cubic",
            stagger: 0.05,
        });

    })
    initInfiniteTweens();
})

function initInfiniteTweens() {
    gsap.fromTo(".kitty-container img", { rotation: 0 }, { rotation: 360, repeat: -1, duration: 1, repeatDelay: 5 });
    gsap.fromTo(".face", { opacity: 1 }, { opacity: 0, repeat: -1, duration: 3, yoyo: true, ease: "sine.inOut" });
}