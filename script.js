// AVOID: Hoisting (moves up but still undefined) ----------------------------------------------------------------
// var a = 1
// console.log(a, b)
// var b = 2

// // `let` and `const` prevent hoisting
// const a = 1
// console.log(a, b)
// const b = 2

// Hoisiting: Function -------------------------------------------------------------------------------------------
// Best Practice: Declare functions and variables before calling
// console.log(sum(5, 7))

// function sum(a, b) {
//     return a + b
// }

// but does not apply to rocket operators..

// const sum = (a, b) => {
//     return a + b
// }

// PROTOTYPES -----------------------------------------------------------------------------------------------------
// const person = {
//     name: 'Matt',
//     age: 50
// }

// // Can add attributes any time (per instance basis)
// const person = new Object() // {}
// person.name = 'Matt'
// person.age = 50

// console.log(person)

// Set own constructor function: 
// function Person(name, age) { // PascalCase for constructor functions
//     this.name = name   //self.name = name
//     this.age = age     //self.age = age
//     this.greet = () => console.log(`${this.name} is ${this.age} years old!`)
// }

// const me = new Person('Lizette', 22)

//   console.log(me.age)
//       // 22

// // Return copy of prototype:
//   console.log(Object) // Object = built-in constructor function

//   me.greet() // contains a function
//     // Lizette is 22 years old!

// SYNTACTIC SUGAR: ------------------------------------------------------------------------------------

// `def` and `__init__`: Classes / Constructors

// Python Equivalent:
// class Person:
    // __init__(name, age):
    //     self.name = name
    //     self.age = age
    
    // def greet()
    // print()

// class Person {
//     constructor(name, age) { // When declaring a method (function within a class), the `function` keyword is omitted.
//         this.name = name     // `constructor` = `__init__` (Python)
//         this.age = age       // `this.name` = `self.name` (Python)
//     }
//     greet() {
//         console.log(`${this.name} is ${this.age} years old!`)
//     }
// }

// const me = new Person('Lizette', 22)

// me.greet()
//     // Lizette is 22 years old!

// EXAMPLE 2:
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(size) {
        this.width = size
        super(size, size) 
    }
}

// const rect = new Rectangle(10, 20)
const rect = new Square(10)
console.log(rect.area())
    // 200
