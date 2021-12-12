class pet {
  constructor(name) {
    this.name = name
    this.hunger = 100
    this.thirst = 100
    this.happiness = 100
    this.energy = 100
    this.toilet = 100
    this.hygiene = 100
  }

  sleep() {
    this.energy -= 40
  }

  drink() {
    this.thirst -= 20
  }

  feed() {
    this.hunger -= 20
  }

  clean() {
    this.hygiene -= 40
  }

  time() {
    this.thirst += 5
    this.hunger += 5
    this.energy += 5
    this.hygiene += 5
  }
}

export class siberianTiger extends pet {
  constructor(name) {
    super(name)
    this.tigerHunt = 0
    this.tigerGroom = 0
    this.tigerPlay = 0
  }
}

export class redPanda extends pet {
  constructor(name) {
    super(name)
    this.redPandaScareOff = 0
    this.redPandaPlay = 0
    this.redPandaChill = 0
  }
}

export class sloth extends pet {
  constructor(name) {
    super(name)
    this.slothScratch = 0
    this.slothPaddle = 0
    this.slothHang = 0
  }
}

// export const add = (num1, num2) => {

// }
