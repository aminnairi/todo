import { describe, test, expect } from "vitest";
import { getMenu } from "./displayMenu";

describe("Should be ok", () => {
  test("Test", () => {
    expect(getMenu()).toStrictEqual([
      "What do you want to do?",
      "1. Create a todo",
      "2. List all tasks",
      "0. Quit this script"
    ]);
  });
});