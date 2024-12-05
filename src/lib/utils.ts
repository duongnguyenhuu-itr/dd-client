import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { EventEmitter } from 'fbemitter';

export const emitter = new EventEmitter();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
