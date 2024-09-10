import Car from "./models/Car";

// Başlangıçta sabit bir liste
export let CarsList = [
  new Car(1, "BMW", "X5"),
  new Car(2, "Tesla", "Model S"),
  new Car(3, "Audi", "A6"),
];

// Araç ekleme işlemi
export const AddCar = (car) => {
  const lastCar = CarsList[CarsList.length - 1];
  car.id = lastCar ? lastCar.id + 1 : 1;
  CarsList.push(car); // Listeye yeni araç ekle
};

// ID ile araç getirme işlemi
export const GetCarById = (id) => {
  const foundCar = CarsList.find((c) => c.id === id);
  return foundCar;
};

// Araç güncelleme işlemi
export const UpdateCar = (id, updatedCarData) => {
  const car = CarsList.find((c) => c.id === id);
  Object.assign(car, updatedCarData); // Mevcut aracı güncelle
};

// Araç silme işlemi
export const DeleteCar = (id) => {
  CarsList = CarsList.filter((car) => car.id !== id); // Listeyi filtrele ve aracı çıkar
};
