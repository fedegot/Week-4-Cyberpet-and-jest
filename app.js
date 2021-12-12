import inquirer from "inquirer"

import { initQuestions, gameQuestion } from "./questions.js"
import { siberianTiger, redPanda, sloth } from "./classes.js"
// const { siberianTiger } = require("./classes")

let myPet
let ui = new inquirer.ui.BottomBar()

const init = async () => {
  let response = await inquirer.prompt(initQuestions)

  if (response.type === "Siberian Tiger") {
    myPet = new siberianTiger(response.name)
  } else if (response.type === "Red Panda") {
    myPet = new redPanda(response.name)
  } else {
    myPet = new sloth(response.name)
  }

  ui.log.write(
    `${myPet.name} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene}`
  )

  gameLoop()
}

const gameLoop = async () => {
  try {
    if (myPet.health >= 150) {
      console.log("Game Over")
      return
    }

    myPet.time()

    let response = await inquirer.prompt(gameQuestion)

    if (response.action === "drink") {
      myPet.drink()
    } else if (response.action === "feed") {
      myPet.feed()
    } else if (response.action === "sleep") {
      myPet.sleep()
    } else if (response.action === "clean") {
      myPet.clean()
    }

    ui.log.write(
      `${myPet.name} | Hunger: ${myPet.hunger} | Thirst: ${myPet.thirst} | Energy: ${myPet.energy} | Hygiene: ${myPet.hygiene}`
    )

    gameLoop()
  } catch (error) {
    console.log(error)
  }
}

init()
