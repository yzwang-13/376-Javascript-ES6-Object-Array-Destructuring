import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";
import animals, { useAnimal } from "./data";

console.log(animals);
let [cat, dog] = animals;
console.log(cat);
// further destruct the car
const { name: catName, sound: carSound } = cat;

// add the default value
const { name: catname = "defaultName", sound: carsound = "defaultSound" } = cat;

// extensive destructuring
const {
  name,
  soung,
  feedingRequirements: { food, water }
} = cat;

console.log(food);

console.log(useAnimal(cat));

const [animal, makeSound] = useAnimal(cat);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
let [tesla, honda] = cars;
console.log(tesla);
let {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour, ...restTeslaColor]
} = tesla;
console.log(tesla.model);
console.log(teslaTopSpeed);
console.log(teslaTopColour);

let {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour, ...restHondaColor]
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
