#!/usr/bin/node 

import { createInterface } from "readline/promises";
import { stdin, stdout } from "process";
import { randomUUID } from "crypto";
import { getMenu } from "./displayMenu";

const todos = [];

const readlineInterface = createInterface({
  input: stdin,
  output: stdout
});

const main = async () => {
  getMenu().forEach(textMenu => {
    console.log(textMenu);
  });

  const answer = await readlineInterface.question("Your choice: ");
  const choice = Number(answer.trim());
  
  console.log({ choice });

  if (choice === 1) {
    const todoDescription = await readlineInterface.question("Todo description: ");
    
    todos.push({
      id: randomUUID(),
      description: todoDescription
    });
    
    return await main();
  }
  
  if (choice === 0) {
    console.log("Ok thanks bye.");

    readlineInterface.close();

    return;
  }
  
  console.log(`Choice not recognized: ${choice}`);
  
  await main();
};

await main();