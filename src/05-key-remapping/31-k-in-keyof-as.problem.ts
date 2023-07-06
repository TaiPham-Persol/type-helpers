import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

type AttributeGetters = unknown;
type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
