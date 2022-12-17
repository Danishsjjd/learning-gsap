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

const images = gsap.utils.toArray(".imgContainer figure") as HTMLImageElement[];
let bigImage = images[0];

images.forEach((img) => {
  img.addEventListener("click", () => {
    changeGrid(img);
  });
});

const changeGrid = (img: HTMLImageElement) => {
  if (img === bigImage) return;

  const state = Flip.getState(images);

  bigImage.dataset.grid = img.dataset.grid;
  img.dataset.grid = "img-1";
  bigImage = img;

  Flip.from(state, { duration: 0.5, absolute: true });
};
