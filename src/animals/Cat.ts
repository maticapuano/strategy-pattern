import { IAnimalSound } from "../interfaces/animal-sound";

export class Cat implements IAnimalSound {
  sound() {
    console.log("Miu Miu", "Cat");
  }
}
