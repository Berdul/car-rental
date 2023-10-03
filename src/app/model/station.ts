import { Car } from './car';

// Extracted from Opendata openapi contract
export interface Station {
  arrond: number; // neighbourhood number
  placal: number; // available cars amount
  numvoie: number; // street number
  typevoie: string; // street type
  nomvoie: string; // street name
  cars?: Car[]; // custom Cars appended
}
