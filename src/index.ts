import { Cat } from "./animals/Cat";
import { Dog } from "./animals/Dog";
import { Oso } from "./animals/Oso";
import { IAnimalSound } from "./interfaces/animal-sound";

const dog = new Dog();
const cat = new Cat();
const oso = new Oso();

function animalSound(animal: IAnimalSound) {
  return animal.sound();
}

animalSound(dog);
animalSound(cat);
animalSound(oso);
