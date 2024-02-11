import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first arguement if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
});

describe("fizzbuzz", () => {
  it("should return FizzBuzz if the number is divisible by 3 and 5");
  expect(fizzBuzz(30)).toBe("FizzBuzz");

  it("should return Fizz if the number is divisible by 3");
  expect(fizzBuzz(9)).toBe("Fizz");

  it("should return Buzz if the number is divisible by 5");
  expect(fizzBuzz(10)).toBe("Buzz");

  it("should return Number if the number is not divisible by 3 and 5");
  expect(fizzBuzz(7)).toBe(`7`);
});
