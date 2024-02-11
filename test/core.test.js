import { describe, test, it, expect } from "vitest";
import { canDrive } from "../src/core";

describe("canDrive", () => {
  it.each([
    {
      age: 15,
      country: "US",
      result: false,
    },
    {
      age: 16,
      country: "US",
      result: true,
    },
    {
      age: 17,
      country: "US",
      result: true,
    },
    {
      age: 16,
      country: "UK",
      result: false,
    },
    {
      age: 17,
      country: "UK",
      result: true,
    },
    {
      age: 18,
      country: "UK",
      result: true,
    },
  ])("should return $result for $age, $country", ({ age, country, result }) => {
    expect(canDrive(age, country)).toBe(result);
  });
});
