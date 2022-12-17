import { Flip } from "gsap/Flip";
import { gsap, Power1 } from "gsap";

gsap.registerPlugin(Flip);

const btn = document.getElementById("changeBtn") as HTMLButtonElement;
const container = document.querySelector(".container");
const newContainer = document.querySelector(".newContainer");
const box = document.getElementById("box") as HTMLElement;

btn.onclick = () => {
  const tl = gsap.to(box, {
    scale: 2,
    transform: "transform(-50%, -50%)",
    duration: 0.5,
    onComplete: function () {
      const state = Flip.getState(box);
      (box?.parentNode === container ? newContainer : container)?.append(box);
      Flip.from(state, {
        ease: Power1.easeInOut,
        duration: 0.5,
        scale: false,
        onComplete: () => {
          tl.reverse();
        },
      });
      console.log("completed");
    },
  });
};
