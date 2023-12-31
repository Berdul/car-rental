import { Car } from '../car/car.model';

// Extracted from Opendata openapi contract
export interface Station {
  id_old: string, // id
  arrond: number; // neighbourhood number
  placal: number; // available cars amount
  numvoie: number; // street number
  typevoie: string; // street type
  nomvoie: string; // street name
  cars?: Car[]; // custom Cars appended
}
