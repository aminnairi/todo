import { describe, test, expect } from "vitest";
import { getMenu } from "./displayMenu";

describe("Should be ok", () => {
  test("Test", () => {
    expect(getMenu()).toStrictEqual([
      "What do you want to do?",
      "1. Create a todo",
      "0. Quit this script"
    ]);
  });
});