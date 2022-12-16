import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panel = gsap.utils.toArray(".vContainer > div");

gsap.to(panel, {
  xPercent: -100 * (panel.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".vContainer",
    pin: true,
    scrub: 1,
    snap: 1 / (panel.length - 1),
    // markers: true,
    end: () => {
      const width =
        document.querySelector<HTMLElement>(".vContainer")?.offsetWidth;
      //  call every single time when width is change
      // console.log("width is", width);
      return "+=" + width;
    },
  },
});

const selector = "b";

gsap.to(`.${selector}`, {
  rotate: 360,
  x: 300,
  scrollTrigger: {
    trigger: `.${selector}`,
    // markers: true,
    id: selector,
    start: "top center",
    end: "+=400",
    toggleActions: "restart pause reverse pause",
    scrub: 2,
    toggleClass: "bg-red-900",
  },
});

const tl = gsap.timeline({
  defaults: { duration: 1.5 },
  // first way
  // scrollTrigger: {
  //   scrub: true,
  //   pin: ".mainContainer",
  // },
});

tl.to(".first", {
  top: 0,
})
  .to(".second", {
    left: 0,
  })
  .to(".third", {
    right: 0,
  });

// second way
ScrollTrigger.create({
  animation: tl,
  scrub: true,
  pin: ".mainContainer",
});
