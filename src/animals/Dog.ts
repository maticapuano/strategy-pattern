import { IAnimalSound } from "../interfaces/animal-sound";

export class Dog implements IAnimalSound {
  sound() {
    console.log("Guau Guau!", "Dog");
  }
}
