export class Footballer {
  constructor(name, age, role) {
    this.name = name
    this.age = age
    this.role = role
  }

  getRole() {
    switch (this.role) {
      case 'goalkeeper':
        console.log(`The footballer, ${this.name} is a goalkeeper`)
        // something else
        break
      case 'defender':
        console.log(`The footballer, ${this.name} is a defender`)
        // something else
        break
      default:
        throw new Error(`Unsupported role, ${this.role}`)
    }
  }
}

export class Footballer2 {
  constructor(name, age, role) {
    this.name = name
    this.age = age
    this.role = role
  }

  getRole() {
    this.role.getRole()
  }
}

export class PlayerRole {
  getRole() {}
}

export class GoalkeeperRole extends PlayerRole {
  getRole() {
    return 'goalkeeper'
  }
}

export class DefenderRole extends PlayerRole {
  getRole() {
    return 'defender'
  }
}