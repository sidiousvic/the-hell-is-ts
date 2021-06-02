/* eslint-disable @typescript-eslint/no-unused-vars */
import database from "./pizza-planet-db.json";

/* 🍕🌍
The types in this file are exported to avoid conflicts with the exercises file.
*/

class PizzaPlanetDB {
  users: User[];
  contributions: IContribution[];
  async getUser(ID: string) {
    console.log("Getting user from database...");
    return database.users.find((user) => user.ID === ID);
  }
}

const db = new PizzaPlanetDB();

/* EX. I
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
Create appropriate interfaces for each kind of object in Pizza Planet. 
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
*/

/* User is a type alias that can evaluate to any type of users.*/
export interface IUser {
  ID: string;
  username: string;
  slices: number;
}

/* Players are the contenders, and they have a pizza slice count
and a record of wins and losses. They have a unique user ID.*/
export interface IPlayer extends IUser {
  wins: number;
  losses: number;
}

/* Fans are the spectators, and they have a cash count
and a record of contributions made. They have a unique user ID.*/
export interface IFan extends IUser {
  contributions?: string[];
}

/* Contributions are objects that represent a contribution 
from fan to player. We should be able to tell when a contribution was made. */
export interface IContribution {
  ID: string;
  benefactorID: string;
  beneficiaryID: string;
  amount: number;
  date: string;
}

/* User is a type alias that can evaluate to any type of users.*/
type User = IPlayer | IFan;

/* EX. II
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
Implement and type the following system function specifications.
The s3x3ID function is already completed for you.↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
*/

/**
 * @name s3x3ID
 * Generates a new ID.
 * @returns
 * A string id in the format "XXX-XXX-XXX"
 * https://learnersbucket.com/examples/javascript/unique-id-generator-in-javascript/
 */
const s3x3ID = () => {
  const s3 = () =>
    Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  return `${s3()}-${s3()}-${s3()}`;
};

/**
 * @name generateContribution
 * Generates a new contribution.
 * @param contributionInfo
 * An object with seed contribution properties
 * @returns
 * A contribution object.
 */
const generateContribution = (
  contributionInfo: Omit<IContribution, "ID" | "date">
): IContribution => {
  return {
    ...contributionInfo,
    ID: s3x3ID(),
    date: new Date().toISOString(),
  };
};

// console.log(
//   "generateContribution ↓↓↓",
//   generateContribution({
//     benefactorID: "XXX-XXX-XXX",
//     beneficiaryID: "XXX-XXX-XXX",
//     amount: 999
//   })
// );

/**
 * @name getUserByID
 * Retrieves a user from the database via UserID.
 * @param db
 * A reference to the database.
 * @returns
 * A function accepting a reference to the database.
 * @param userID
 * The ID of a registered user.
 * @example {getUserByID(db)("MMM-MMM-MMM").then()}
 */
const getUserByID =
  (db: PizzaPlanetDB) =>
  async (userID: string): Promise<IUser> => {
    const user = await db.getUser(userID);
    // @ts-ignore
    return user;
    /* Types of property 'slices' are incompatible.
       Type 'string' is not assignable to type 'number'.
    */
  };

getUserByID(db)("MMM-MMM-MMM").then(console.log);

/* EX. III
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
Construct the following types by using utility types.
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯ 
*/

/** 
 A contribution without a benefactor. 
 * @type AnonymousContribution 
 * @uses Omit<T,S>
*/
export type AnonymousContribution = Omit<IContribution, "benefactorID">;

/**
 A fan that has made a contribution.
 * @type Contributor 
 * @uses Omit<T> 
*/
export type Contributor = Required<IFan>;

const fraser: Contributor = {
  ID: "FFF-FFF-FFF",
  username: "frooth",
  contributions: [],
  /* 
      Removing the 'contributions' property above should cause the error:

      Property 'contributions' is missing in type 
      '{ ID: string; username: string; slices: number; }' 
      but required in type '<YourTypeHere>'
  */
  slices: Infinity,
};

/** 
 A type conztaining any number of fields from a user.
 * @type UserInfo
 * @uses Partial<T>
*/
export type UserInfo = Partial<User>;

const userInfo: UserInfo = {
  ID: "BBB-BBB-BBB",
  contributions: ["000-000-000"],
  // age: 9,
  /* 
      Uncommenting the 'age' property above should cause the error:

      Type '{ ID: string; contributions: string[]; age: number; }'
      is not assignable to type '<YourTypeHere>'
      Object literal may only specify known properties, 
      and 'age' does not exist in type '<YourTypeHere>'
  */
};

/* EX. IV
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
Construct the following generic types.
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
*/

/** 
 A type whose property values are always users.
 * @type UserDictionary
https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types
*/

export type UserDictionary = {
  [key: string]: User;
};

const users: UserDictionary = {
  johan: {
    ID: "JJJ-JJJ-JJJ",
    username: "johanthestrup",
    contributions: ["444-444-444", "666-666-666"],
    slices: 999,
  },
  michael: {
    ID: "MMM-MMM-MMM",
    username: "mikemetcalf",
    contributions: ["444-444-444", "666-666-666"],
    slices: 999,
  },
  // notAUser: "",
  /* 
      Uncommenting the 'notAUser' property above should cause the error:

      Type 'string' is not assignable to type 'User'
  */
};

/** 😈 
 The type of a specific property from another type.
 * @type Property 
 * @example { 
 * type X = {a: "", b: 0};
 *   typeof Property<X, "b"> // number 
 * }
 * @link https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
*/
export type Property<T, K extends keyof T> = T[K];

const getIDByUsername = (username: Property<IUser, "ID">) => {};

/* EX. V
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
Create an abstract BaseUser class, which further child Player and Fan classes extend from.
Both Player and Fan should implement their respective interface and declare necessary properties.
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
*/

/**
 * Represents the base properties of a user.
 * @abstract
 * @name BaseUser
 * @implements User
 */
export abstract class BaseUser implements IUser {
  ID: string;
  username: string;
  slices: number;

  /**
   * Calculates the amount of pizzas a user has amassed, based on an 8—way sliced pie.
   * @name getPizzas
   * @returns an integer indicating the amount of pizzas.
   */
  getPizzas(): number {
    const pizzas = ~~(this.slices / 8);
    return pizzas;
  }
}

/**
 * Represents a player.
 * @name Player
 * @extends BaseUser
 */
export class Player extends BaseUser implements IPlayer {
  wins: number;
  losses: number;
}

/**
 * Represents a fan.
 * @name Fan
 * @extends BaseUser
 */
export class Fan extends BaseUser implements IFan {
  contributions: string[];
}

/* EX. VI
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
Create a 'deprecated' class decorator that receives a semantic version number,
and logs the message "This class has been deprecated in version <version number>,
and may not work as intended." when instantiated from the Fan or Player class.
↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯↯
*/

/**
 * @name deprecated
 * @param version
 * @returns a decorator function that logs a deprecation message.
 * @example {@deprecated("6.6.5")}
 */
function deprecated(version: string) {
  return function (target: Function) {
    console.log(
      `Class <${target.name}> has been deprecated in version ${version}, and may not work as intended.`
    );
  };
}
