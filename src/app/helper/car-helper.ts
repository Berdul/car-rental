import { cars } from 'src/mock-data/mock-cars';
import { Car } from '../car/car.model';
import { getRandomInt } from './math-helper';

export const generateCarArray = (lenght: number): Car[] => {
  let array: Car[] = [];

  for (let i = 0; i < lenght; i++) {
    array.push(cars[getRandomInt(0, cars.length - 1)]);
  }
  return array;
};
