/* eslint-disable @typescript-eslint/no-unused-vars */

import "./pizza-planet";

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
PRIMITIVE TYPES, TYPE LITERALS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

/* ↯
strings
↯ */
const pizzaSlice = "🍕";
pizzaSlice.charAt(7);

/* ↯
numbers
↯ */
const sliceQty = 9;
sliceQty.toFixed(); // ✸ IntelliSense

/* ↯
booleans
↯ */
const pieTillIDie: boolean = true;
pieTillIDie.valueOf();

/* ↯
arrays
↯ */
const pizza: string[] = ["🍕", "🍕", "🍕"]; // ✸ Not assignable error

/* ↯
functions
↯ */
const slicedPizza = (pizza: string[], slices: number): string[] => {
  return pizza.slice(0, slices);
}; // ✸ hover info, function signature

const slices = slicedPizza(["a", "b"], 2);
slices.join("🍍"); // ✸ type inference

/* ↯
any — when you can't be bothered 
↯ */
const x: any = 9;
// x.slice();

/* ↯
unknown — type—safe version of any
↯ */
let y: unknown = [];
// y = 9; // allowed
(y as string[]).slice(); // ✸ type casting

/* ↯
never — when something will NEVER happen
(you will know it when you need it)
↯ */

const error = () => {
  throw new Error();
};

const z = () => error();

const infiniteLoop = () => {
  while (true) {
    // vic.powerLevel++
  }
};

const a = () => infiniteLoop();

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
INTERFACES — describe shapes of objects, and relationships
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

interface StringedInstrument {
  name?: string; // ✸ properties can be nullable
  strings: number;
}

interface StringedInstrument {
  color?: string; // ✸ interfaces merge declarations
}

const gear: StringedInstrument[] = [
  { name: "Fender Stratocaster", strings: 6 /* id: 9 */ }, // ✸ does not exist error
  { name: "Gibson EDS-1275", strings: 18, color: "red" },
  { strings: 4, color: "blue" },
];

interface Piano extends StringedInstrument {
  keys: number;
}

interface Guitar extends StringedInstrument {
  tremolo: boolean;
} // ✸ Show Definitions (CMD + Click)

const wurlitzer: Piano = { strings: 4, keys: 88 };
const lesPaul: Guitar = { strings: 4, tremolo: false };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
TYPE ALIASES — mix, nickname and blend types
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// type RockInstrument = Piano | Guitar;

// const hammond: RockInstrument = { strings: 0, keys: 60, color: "brown" };
// const strat: RockInstrument = { strings: 4, tremolo: true, color: "white" };

/* ↯
type unions (|) ↯ x or y or both
↯ */
// type Alive = { bloodPressure: number };
// type Dead = { causeOfDeath: string };

// type SchrodingerCat = Alive | Dead;

// const felix: SchrodingerCat = { bloodPressure: 90 };
// const tom: SchrodingerCat = { causeOfDeath: "Jerry" /* color: "gray" */ };
// const mia: SchrodingerCat = { bloodPressure: 90, causeOfDeath: "Your code." };

/* ↯
intersection types (&) ↯ x and y
↯ */
// interface Anchovy {
//   edible: false; // ✸ Type literal
// }

// interface Pizza {
//   diameter: number;
// }

// type AnchovyPizza = Pizza & Anchovy;

// const dinner: AnchovyPizza = {
//   diameter: 12,
//   edible: true,
// };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 GENERICS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// const id = (x) => x;

// document.querySelector("#").src; // return type is Element
// document.querySelector<HTMLImageElement>("#").src; // return type is HTMLImageElement

// const map = () => () => {};

// const pizziFy = () => "🍕";
// const v = map(pizziFy)([1, 2, 3]);
// const w = map(pizziFy)(["One", "Two", "Three"]);

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
UTILITY TYPES — your base type toolkit
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// Partial — S with all props of T as nullable
// Pick — S with specific props of T
// Required — S with all props of T as required

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 TYPE DECLARATIONS & EXPORTS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// export type Model3D = {
//   file: string;
//   material: {
//     shader: string;
//   };
// };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 CLASSES
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

interface Villain {
  hood: boolean;
  bald: boolean;
  laughEvilly: (length: number) => string;
} // ✸ Implements

class Lord {
  createPublicPolicy: (salary: number) => never;
} // ✸ Extends

class Darklord extends Lord implements Villain {
  hood: boolean;
  bald: boolean;
  evilPlans: string;
  #powerLevel: number;

  laughEvilly(length: number) {
    const evilLaugh = "Muaha" + [...Array(length)].fill("ha").join("") + "!";
    return evilLaugh;
  }
}

// const Chris = new Darklord();
// Chris.evilPlans = "Replace Evan's graphics card with a Pop-Tart";
// Chris.hood = true;
// Chris.bald = false;
// console.log(Object.isFrozen(Darklord)); // ✸ decorated with frozen
// console.log(Chris.laughEvilly(9));
// console.log(Chris.laughEvilly(9)); // ✸ decorated with memoize
// // Chris.#powerLevel; // ✸ private properties (#)

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 DECORATORS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */
// ✸ Why do decorators only work with classes?

// function frozen(target: Function): void {
//   Object.freeze(target);
//   Object.freeze(target.prototype);
// } // ✸ Class decorator

// function memoize(
//   target: Object,
//   property: string | symbol,
//   desc: PropertyDescriptor
// ) {
//   const fn = desc.value;
//   const cache = {};
//   desc.value = (...args) => {
//     const hash = args.join("-");
//     if (!cache[hash]) {
//       cache[hash] = fn.apply(target, args);
//       return cache[hash];
//     } else {
//       console.log("Retrieving from cache...");
//       return cache[hash];
//     }
//   };
//   return desc;
// } // ✸ Method decorator

// function log(color: "r" | "g" | "b") {
//   return function (target: Object, property: string | symbol) {
//     const levels = {
//       r: "\x1b[31m",
//       g: "\x1b[32m",
//       b: "\x1b[35m",
//     };
//     console.log(`${levels[color]} ${target}`);
//   };
// } // ✸ Decorator factory

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
ENUMS — finite sets of constant values
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// enum LogLevel {
//   Error = "error",
//   Debug = "debug",
//   Default = "default",
// }

// const debug = LogLevel.Debug; // "debug"
// const logger = (color: LogLevel): void => console[LogLevel[color]];

/* 
Why not a union type? -> type LogColors = "r" | "b" | "g"
Enums -> Iterable, and as symbols, easily updateable
Unions -> Terser, accessible, extendable and performant
*/
