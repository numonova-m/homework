//1task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

/*Talaba klassi
   Vazifa: name, age, subjects uchun get/set metodlar yarating
   Expected:
   student.name = "John"
   student.age = 20
   student.addSubject("Math")
   console.log(student.subjects) // ["Math"]*/

// class Student {
//   constructor() {
//     this.Name = "";
//     this.Age = 0;
//     this.Subject = [];
//   }

//   get name() {
//     return this.Name;
//   }
//   set name(value) {
//     this.Name = value;
//   }
//   get age() {
//     return this.Age;
//   }
//   set age(value) {
//     if (value > 0) {
//       this.Age = value;
//     } else {
//       ("yosh 0dan kichik bolishi mumkin emas");
//     }
//   }
//   addsubject(subject) {
//     if (subject) {
//       this.Subject.push(subject);
//     }
//   }
//   get subject() {
//     return this.Subject;
//   }
// }
// const student = new Student();
// student.Name = "malika";
// student.Age = 19;
// student.addsubject("math");
// console.log(student.Subject);

//2task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
/*Kalkulator klassi
   Vazifa: add(), subtract(), multiply(), divide() metodlari
   Expected:
   const calc = new Calculator()
   calc.add(5,3)    // 8
   calc.multiply(4,2) // 8*/

// class calculator {
//   constructor() {
//     this.a = null;
//     this.b = null;
//   }
//   add(a, b) {
//     this.a = a;
//     this.b = b;
//     return a + b;
//   }
//   subtract(a, b) {
//     this.a = a;
//     this.b = b;
//     return a - b;
//   }
//   divide(a, b) {
//     this.a = a;
//     this.b = b;
//     return a / b;
//   }
//   multiplay(a, b) {
//     this.a = a;
//     this.b = b;
//     return a * b;
//   }
// }

// const Calculator = new calculator();
// console.log(Calculator.add(2, 5));
// console.log(Calculator.subtract(2, 5));
// console.log(Calculator.divide(2, 5));
// console.log(Calculator.multiplay(2, 5));

//3task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
/*BankAccount klassi 
Vazifa: deposit(), withdraw(), getBalance() metodlari
Expected:
account.deposit(100)
account.withdraw(30)
account.getBalance() // 70*/

// class BankAccount {
//   constructor() {
//     this.balance = 0;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     } else {
//       console.log("deposite miqdori manfiy bo'lishi mumkin emas!!!");
//     }
//   }
//   withdraw(amount) {
//     if (amount > 0 && amount <= this.balance) {
//       this.balance -= amount;
//     } else if (amount > this.balance) {
//       console.log("hisobda mablag' yetarli emas!!!");
//     } else {
//       console.log("withdraw miqdori manfiy bolishi mumkin emas");
//     }
//   }
//   getBalance() {
//     return this.balance;
//   }
// }
// const account = new BankAccount();
// account.deposit(100);
// account.withdraw(30);
// console.log("Balans:", account.getBalance());

//4task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
/*Timer klassi
   Vazifa: start(), stop(), reset() metodlari
   Expected:
   timer.start()  // starts counting
   timer.stop()   // pauses
   timer.reset()  // resets to 0*/

// class Timer {
//   constructor() {
//     this.time = 0;
//     this.setInterval = null;
//   }
//   start() {
//     if (!this.setInterval) {
//       this.setInterval = setInterval(() => {
//         this.time++;
//         console.log(`${this.time} sekund`);
//       }, 1000);
//     }
//   }
//   stop() {
//     if (this.setInterval) {
//       clearInterval(this.setInterval);
//       this.setInterval = null;
//       console.log("timer toxtatildi");
//     } else {
//       console.log("Timer hozir ishlamayapti.");
//     }
//   }
//   reset() {
//     this.stop;
//     this.time = 0;
//     console.log("timer reset qilindi");
//   }
// }
// const timer = new Timer();
// timer.start();
// setTimeout(() => timer.stop(), 5000);
// setTimeout(() => timer.reset(), 8000);

//5task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

/*TodoList klassi
   Vazifa: addTask(), removeTask(), getTasks() metodlari
   Expected:
   todo.addTask("Buy milk")
   todo.getTasks() // ["Buy milk"]
   todo.removeTask("Buy milk")*/

// class TodoList {
//   constructor() {
//     this.tasks = [];
//   }
//   addTask(task) {
//     if (!this.tasks.includes(task)) {
//       this.tasks.push(task);
//       console.log(`Vazifa qo'shildi: "${task}"`);
//     } else {
//       console.log(`Vazifa allaqachon ro'yxatda: "${task}"`);
//     }
//   }
//   removeTask(task) {
//     const index = this.tasks.indexOf(task);
//     if (index !== -1) {
//       this.tasks.splice(index, 1);
//       console.log(`Vazifa olib tashlandi: "${task}"`);
//     } else {
//       console.log(`Bunday vazifa ro'yxatda yo'q: "${task}"`);
//     }
//   }
//   getTasks() {
//     return this.tasks;
//   }
// }
// const todo = new TodoList();
// todo.addTask("Buy milk");
// console.log(todo.getTasks());
// todo.removeTask("Buy milk");
// console.log(todo.getTasks());
// todo.addTask("Walk the dog");
// todo.addTask("Buy milk");
// console.log(todo.getTasks());

//6task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
/*Product klassi
   Vazifa: name, price, discount hisoblash metodlari
   Expected:
   product.setPrice(100)
   product.setDiscount(20)
   product.getFinalPrice() // 80*/

// class Product {
//   constructor() {
//     this.Product = null;
//     this.price = 0;
//   }
//   addProduct(name) {
//     this.Product = name;
//     console.log(`Maxsulot nomi ${name}`);
//   }
//   setPrice(price) {
//     this.price += price;
//     console.log(`maxsulot narxi ${this.price}`);
//   }
//   setDiscount(prosent) {
//     console.log(`maxsulotga qoyilgan chegirma ${prosent}% ga teng`);
//     this.price = this.price - (prosent / 100) * this.price;
//   }
//   getFinalPrice() {
//     console.log(`maxsulot narxi chegirma bilan ${this.price} ga tushirildi`);
//   }
// }
// const product = new Product();
// product.addProduct("telefon");
// product.setPrice(1000);
// product.setDiscount(15);
// product.getFinalPrice();

//7task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

/* Circle klassi
   Vazifa: radius berish, yuza va perimetr hisoblash
   Expected:
   circle.setRadius(5)
   circle.getArea() // 78.54
   circle.getPerimeter() // 31.42*/

// class Circle {
//   constructor() {
//     this.radius = 0;
//     this.pi = 3.14;
//   }
//   setRadius(a) {
//     this.radius = a;
//     console.log(`doiraning radiusi ${a} ga teng`);
//   }
//   yuza() {
//     console.log(`yuzasi ${this.pi * this.radius ** 2} ga teng`);
//   }
//   perimetr() {
//     console.log(`permetri ${2 * this.pi * this.radius} ga teng`);
//   }
// }
// const info = new Circle();
// info.setRadius(5);
// info.perimetr();
// info.yuza();

//8task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
/*Book klassi
   Vazifa: title, author, price, getInfo() metodi
   Expected:
   book.setTitle("JavaScript")
   book.setAuthor("John Doe")
   book.getInfo() // "JavaScript by John Doe"*/

// class Book {
//   constructor() {
//     this.title = "";
//     this.author = "";
//   }
//   setTitle(title) {
//     this.title = title;
//   }
//   setAuthor(author) {
//     this.author = author;
//   }
//   getInfo() {
//     return `${this.title} by ${this.author}`;
//   }
// }
// const book = new Book();
// book.setTitle("JavaScript");
// book.setAuthor("John Doe");
// console.log(book.getInfo());

//9task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

/*Temperature klassi
   Vazifa: celsius va fahrenheit konvertatsiya
   Expected:
   temp.setCelsius(30)
   temp.toFahrenheit() // 86*/

// class Temperature {
//   constructor() {
//     this.celsius = 0;
//   }
//   setCelsius(celsius) {
//     this.celsius = celsius;
//   }
//   toFahrenheit() {
//     return (this.celsius * 9) / 5 + 32;
//   }
// }
// const temp = new Temperature();

// temp.setCelsius(30);
// console.log(temp.toFahrenheit());

//10task-*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
/*Counter klassi
   Vazifa: increment(), decrement(), getValue() metodlari
   Expected:
   counter.increment()
   counter.increment()
   counter.getValue() // 2 */

class Counter {
  constructor() {
    this.value = 0;
  }
  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
  getValue() {
    return this.value;
  }
}
const counter = new Counter();

counter.increment();
counter.increment();
console.log(counter.getValue());
