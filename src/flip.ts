import { gsap } from "gsap";

const btn = document.getElementById("changeBtn") as HTMLButtonElement;
const container = document.querySelector(".container");
const newContainer = document.querySelector(".newContainer");
const box = document.getElementById("box");

btn.onclick = () => {
  (box?.parentNode === container ? newContainer : container)?.append(box);
};
