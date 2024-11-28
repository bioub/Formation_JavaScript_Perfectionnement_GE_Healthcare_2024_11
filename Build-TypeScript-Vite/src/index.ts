import { Horloge } from "./horloge.js";

const divElt = document.querySelector('.horloge') as HTMLDivElement;

const clock = new Horloge(divElt);
clock.start();
