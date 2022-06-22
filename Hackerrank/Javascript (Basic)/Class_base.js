class User {
  constructor(name) {
    this.username = name
  }
  
  getUsername() {
    return this.username
  }
  
  setUsername(name) {
    this.username = name
  }
}

class ChatUser extends User {
  constructor(name) {
    super(name)
    this.warningCount = 0
  }
  
  giveWarning() {
    this.warningCount += 1
  }
  
  getWarningCount() {
    return this.warningCount
  }
}


// Testing
let obj2 = new ChatUser("Purohit")

console.log(obj2.getUsername());

let a = obj2.setUsername('Ravindra')

obj2.giveWarning()
obj2.giveWarning()
obj2.giveWarning()


console.log(obj2.getWarningCount());
console.log(obj2.getUsername());