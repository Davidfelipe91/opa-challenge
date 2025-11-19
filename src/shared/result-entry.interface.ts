import type { Element } from "./elements.interface";

export interface ResultEntry {
  minCalories: number;
  maxWeight: number;
  elements: Element[];
  optimalElements: string[];
}
