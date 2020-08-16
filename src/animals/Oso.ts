import { IAnimalSound } from "../interfaces/animal-sound";

export class Oso implements IAnimalSound {
  sound() {
    console.log("Awww Awwww", "Oso");
  }
}
