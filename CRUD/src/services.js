import Car from "./models/Car";

let CarsList = [
  new Car(1, "BMW", "X5"),
  new Car(2, "Tesla", "Model S"),
  new Car(3, "Audi", "A6"),
];

export default CarsList;

export const AddCar = (car) => {
  const lastCar = CarsList[CarsList.length - 1];
  car.id = lastCar ? lastCar.id + 1 : 1; // Yeni id ataması
  CarsList.push(car);
};
