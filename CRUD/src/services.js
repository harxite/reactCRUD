import Car from "./models/Car";

let CarsList = [
  new Car(1, "BMW", "X5"),
  new Car(2, "Tesla", "Model S"),
  new Car(3, "Audi", "A6"),
];

export default CarsList;

export const AddCar = (car) => {
  const lastCar = CarsList[CarsList.length - 1];
  car.id = lastCar ? lastCar.id + 1 : 1;
  CarsList.push(car);
};

export const GetCarById = (id) => {
  const foundCar = CarsList.find((c) => c.id === id);
  return foundCar;
};

export const UpdateCar = (id, updatedCarData) => {
  const car = CarsList.find((c) => c.id === id);
  Object.assign(car, updatedCarData);
};
