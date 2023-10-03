import { cars } from "src/mock-data/mock-cars";
import { Car } from "../model/car";
import { Station } from "../model/station";

export const appendCarsToStation = (station: Station): Station => {
  return {...station, cars: generateCarArray(station.placal)};
}

const generateCarArray = (lenght: number): Car[] => {
  //if (length === 0) return [];
  
  let array: Car[] = [];

  for (let i = 0; i < lenght; i++) {
    array.push(cars[getRandomInt(0, cars.length)]);
  }
  return array;
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const coucou = Math.floor(Math.random() * (max - min + 1)) + min;
  return coucou;
}