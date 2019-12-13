const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimal(animal) {
  return [
    animal.name,
    () => {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimal };
