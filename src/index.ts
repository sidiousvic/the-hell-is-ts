/* eslint-disable @typescript-eslint/no-unused-vars */

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
PRIMITIVE TYPES, TYPE LITERALS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

/* ↯
strings
↯ */
// const pizzaSlice = "🍕";
// pizzaSlice.charAt(7);

/* ↯
numbers
↯ */
// const sliceQty = 9;
// sliceQty.toFixed(); // ✸ IntelliSense

/* ↯
booleans
↯ */
// const pieTillIDie: boolean = true;
// pieTillIDie.valueOf();

/* ↯
arrays
↯ */
// const pizza: string[] = ["🍕", "🍕", "🍕"]; // ✸ Not assignable error

/* ↯
functions
↯ */
// const slicedPizza = (pizza: string[], slices: number): string[] => {
// return pizza.slice(0, slices);
// }; // ✸ hover info, function signature

// const slices = slicedPizza(["a", "b"], 2);
// slices.join("🍍"); // ✸ type inference, join is autocompleted

/* ↯
any — when you can't be bothered
↯ */
// const x: any = 9;
// x.slice(); // ✸ compile time: "u can do wtf you want", but it will error at runtime

/* ↯
unknown — type—safe version of any
↯ */
// let y: unknown = [];
// y = 9; // ✅ reassignment allowed
// y.slice(); // 🛑 not allowed
// (y as string[]).slice(); // ✸ ✅ type casting, but runtime error if y is not array

/* ↯
never — when something will never be
(you will know it when you need it)
↯ */
// const error = () => {
// throw new Error();
// }; // ↯ hover over function labels to see their return type inferred as 'never'

// const z = () => error();

// const infiniteLoop = () => {
// while (true) {
// vic.powerLevel++
// }
// };

// const a = () => infiniteLoop();

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
INTERFACES — describe shapes of objects, and relationships
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// interface StringedInstrument {
//   name?: string; // ✸ properties can be nullable
//   strings: number;
// }

// interface StringedInstrument {
//   color?: string; // ✸ interfaces merge declarations
// }

// const gear: StringedInstrument[] = [
//   { name: "Fender Stratocaster", strings: 6 /* id: 9 */ }, // ✸ does not exist error
//   { name: "Gibson EDS-1275", strings: 18, color: "red" },
//   { strings: 4, color: "blue" },
// ];

// interface Piano extends StringedInstrument {
//   keys: number;
// }

// interface Guitar extends StringedInstrument {
//   tremolo: boolean;
// } // ✸ Show Definitions (CMD + Click)

// const wurlitzer: Piano = { strings: 4, keys: 88 };
// const lesPaul: Guitar = { strings: 4, tremolo: false };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
TYPE ALIASES — mix, nickname and blend types
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// type RockInstrument = Piano | Guitar;

// const hammond: RockInstrument = { strings: 0, keys: 60, color: "brown" };
// const strat: RockInstrument = { strings: 4, tremolo: true, color: "white" };
// const banjo: RockInstrument = { coolnessLevel: Infinity }; // 🛑 not a RockInstrument

/* ↯
type unions (|) ↯ X or Y or BOTH
↯ */
// interface Alive {
//   bloodPressure: number;
// }

// interface Dead {
//   causeOfDeath: string;
// }

// type SchrodingerCat = Alive | Dead;

// const felix: SchrodingerCat = { bloodPressure: 90 };
// const tom: SchrodingerCat = { causeOfDeath: "Jerry" /* color: "gray" */ };
// const mia: SchrodingerCat = { bloodPressure: 90, causeOfDeath: "Your code." };

/* ↯
unions as enumerables (finite sets of literal values)
↯ */
// type Colors = "red" | "blue" | "green";
// const blu: Colors = "blue";
// const yel: Colors = "yellow"; // 🛑 not assignable to type 'Colors'

/* ↯
intersection types (&) ↯ X and Y
↯ */
// interface Anchovy {
//   edible: false; // ✸ Type literal
//   disgusting: boolean;
// }

// interface Pizza {
//   diameter: number;
// }

// type AnchovyPizza = Pizza & Anchovy;

// const dinner: AnchovyPizza = {
//   disgusting: false,
//   diameter: 12,
//   edible: false,
//   // ↑ commenting 'edible' will cause an error when using an intersection.

//   /*
//   Remember
//   X & Y -> X and Y together
//   X | Y -> X or Y or a combination of both
//   */
// };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 GENERICS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

/* ↯
Consuming a generically typed function.
You have to provide the missing types through angle brackets. <>
These are known as type arguments/parameters.

                       ↓↓↓ type argument
document.querySelector<HTMLImageElement>("#").src; 
↯ */

// document.querySelector("#img").src; // 🛑 'src' does not exist on type 'Element'
// document.querySelector<HTMLImageElement>("#").src; // return type is HTMLImageElement

/* ↯
Defining a generically typed function
We expect a type parameter T to be specified at call time.
With that, we can infer dynamically the rest of our types.
↯ */
// const id = <T>(x: T): T => x;

// const str = id<string>("Mussin"); // string
// const int = id<number>(9); // number

/* ↯
Generically typing a more complex function definition
↯ */
// const map =
//   <T>(fn: Function) =>
//   (arr: T[]): T[] => {
//     const rMap =
//       (fn: Function) => (arr: T[]) => (idx: number) => (acc: T[]) => {
//         // exit case
//         if (arr[idx] === undefined) return acc;
//         const nextIdx = idx + 1;
//         const curr = arr[idx];
//         const nextAcc = [...acc, fn(curr)];
//         return rMap(fn)(arr)(nextIdx)(nextAcc);
//       };
//     return rMap(fn)(arr)(0)([]);
//   };

// const pizzify = () => "🍕";
// const v = map<number>(pizzify)([1, 2, 3]); // number[]
// const w = map<string>(pizzify)(["X", "Y", "Z"]); // string[]
// const u = map(pizzify)([6, 9, 6]); // unknown[]

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
UTILITY TYPES — your base type toolkit
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

/* ↯
Partial — S with all props of T set as nullable
↯ */
// interface User {
//   username: string;
//   password: string;
//   registeredOn: string;
//   likesBooze?: "apparently";
// }

// const registerUser = (userInfo: Partial<User>) => {
//   // userInfo: Partial<User>
// };

// registerUser({ username: "julieRocks", password: "0" }); // ✅ OK
// registerUser({}); // ✅ also OK though... 😨

/* ↯
Pick — S with specific props of T
↯ */
// const usernameAndPassword: Pick<User, "username" | "password"> = {
//   username: "",
//   password: "",
//   //   registeredOn: "",
//   // ↑ 🛑 does not exist in type 'Pick<User, "username" | "password">'
// };

/* ↯
Required — S with all props of T as required
↯ */
// const requiredFields: Required<User> = {
//   username: "",
//   password: "",
//   registeredOn: "",
//   likesBooze: "apparently",
//   // ↑ likesBooze was originally optional, but try omitting it now. (🛑)
// };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 TYPE DECLARATIONS & EXPORTS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

/* ↯
Go to src/module.ts
To see how this type is imported
↯ */
// export type Model3D = {
//   file: string;
//   material: {
//     shader: string;
//   };
// };

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 CLASSES
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// interface Villain {
//   //   [s: string]: boolean | string | ((n: number) => string); // ✸ Indexable types
//   hood: boolean;
//   bald: boolean;
//   evilPlans: string;
//   laughEvilly: (length: number) => string;
// } // ✸ Implements

// // this provides inherited values
// class Governor {
//   createPublicPolicy(salary: number) {}
// } // ✸ Classes can be abstract

// new Governor(); //  🛑 Cannot create an instance of an abstract class.

// // @frozen
// class Darklord extends Governor implements Villain {
//   hood: boolean;
//   bald: boolean;
//   evilPlans: string; // 🛑 comment this out to see an implements error
//   #powerLevel: number; // ✸ private properties (# or private)

//   // @memoize
//   // @logWithColor("g") // -> Factory returns decorator
//   laughEvilly(length: number) {
//     const evilLaugh = "Muaha" + [...Array(length)].fill("ha").join("") + "!";
//     return evilLaugh;
//   }
// }

// const Chris = new Darklord(); // Chris's type is Darklord
// Chris.evilPlans = "Replace Evan's graphics card with a Pop-Tart";
// Chris.hood = true;
// Chris.bald = false;
// console.log(
//   Object.isFrozen(Darklord) ? "Darklord is ❄️" : "Darklord is not frozen."
// ); // ✸ decorated with frozen
// console.log(Chris.laughEvilly(9));
// console.log(Chris.laughEvilly(9)); // ✸ decorated with memoize
// Chris.#powerLevel; // 🛑 Has a private identifier

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
😈 DECORATORS
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */
/* 
✸ Why do decorators only work with classes?
'Cuz decorators are easily implemented with func expressions/declarations ↯
*/

// ↯ run o' the mill normal func
// const fn = (x: string): string => x;

// ↯ decorator function
// const pizzaz = (fn: Function) => (x: string) => fn(x + " 🍕");

// const withPizza = pizzaz(fn); // decorating fn
// console.log(fn("I'm hungry"), "(undecorated)");
// console.log(withPizza("I'm hungry"), "(decorated)");

/* ↯
Thus, a decorator is a function that receives a function, 
and returns an enhanced version of it! 😈

Decorators with the syntax '@' are used in TypeScript to decorate
01. classes
02. class properties
03. class methods

When defined though, they are just functions that accept specific parameters for each case.
↯ */

// function frozen(target: Function): void {
//   console.log(target + "was instantiated!");
//   Object.freeze(target);
//   Object.freeze(target.prototype);
// } // ✸ Class decorator

// function memoize(
//   target: Object, // the Darklord class
//   property: string | symbol, // "laughEvilly"
//   desc: PropertyDescriptor // {value: [Function: laughEvilly]}
// ) {
//   const fn = desc.value; // [Function: laughEvilly]
//   const cache = {};
//   desc.value = (...args: any[]) => {
//     const hash = args.join("-");
//     if (!cache[hash]) {
//       cache[hash] = fn.apply(target, args);
//       return cache[hash];
//     } else {
//       console.log("💾 Memoized value found...");
//       return cache[hash];
//     }
//   };
//   return desc;
// } // ✸ Method decorator

// function logWithColor(color: "r" | "g" | "b") {
//   return function (target: Object, property: string | symbol) {
//     const levels = {
//       r: "\x1b[31m",
//       g: "\x1b[32m",
//       b: "\x1b[35m",
//     };
//     console.log(`${levels[color]}${String(property)} was called.\x1b[0m`);
//   };
// } // ✸ Decorator factory

/* ↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
ENUMS — finite sets of constant values
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ */

// enum LogLevels {
//   Error = "error",
//   Debug = "debug",
//   Default = "default",
// }

// const debug = LogLevels.Debug; // "debug"
// const logger = (color: LogLevels): void => console[LogLevels[color]];

/* ↯
Why not a union type? -> type LogColors = "r" | "b" | "g"
Enums -> Iterable, and as symbols, easily updateable
Unions -> Terser, accessible, extendable and performant

Ball's in your court, devil! 😈
↯ */

// const keys = Object.keys(LogLevels); // ✸ Iterable
// console.log(keys);

/* ↯
Hope you enjoyed these examples.

Now time to do the exercises! 

Delve into src/pizza-planet.ts to continue the odyssey! 🍕🌍
↯ */
