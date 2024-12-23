//1task
// function getNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 == 0) {
//       resolve("juft son");
//     } else {
//       reject("toq son");
//     }
//   });
// }
// getNumber(4)
//   .then((juft) => console.log(juft))
//   .catch((toq) => console.log(toq));
// getNumber(5)
//   .then((juft) => console.log(juft))
//   .catch((toq) => console.log(toq));

//2task
// function Password(paswd) {
//   return new Promise((resolve, reject) => {
//     if (paswd.length >= 8) {
//       resolve("Parol to'g'ri!");
//     } else {
//       reject("Parol juda qisqa!");
//     }
//   });
// }
// Password("abc123456")
//   .then((togri) => console.log(togri))
//   .catch((notogri) => console.log(notogri));

// Password("abc123")
//   .then((togri) => console.log(togri))
//   .catch((notogri) => console.log(notogri));

//3task
// function getAge(age) {
//   return new Promise((resolve, reject) => {
//     if (age > 18) {
//       resolve("Xush kelibsiz!");
//     } else {
//       reject("Siz balog'at yoshiga yetmagansiz");
//     }
//   });
// }
// getAge(16)
//   .then((kotta) => console.log(kotta))
//   .catch((kichik) => console.log(kichik));
// getAge(20)
//   .then((kotta) => console.log(kotta))
//   .catch((kichik) => console.log(kichik));

//4task

// function filter(obj) {
//   return new Promise((resolve, reject) => {
//     if (!obj.name) {
//       reject("name kiritilmagan");
//     } else if (!obj.email) {
//       reject("email kiritilmagan");
//     } else {
//       resolve(obj);
//     }
//   });
// }
// const obj1 = { name: "Ali", email: "ali@mail.com" };
// const obj2 = { name: "Ali" };
// filter(obj1)
//   .then((data) => console.log(data))
//   .catch((xato) => console.log(xato));
// filter(obj2)
//   .then((data) => console.log(data))
//   .catch((xato) => console.log(xato));

//5task
// function calc(a, b) {
//   return new Promise((resolve, reject) => {
//     if (b != 0) {
//       resolve(a / b);
//     } else {
//       reject("nolga bolish mukin emas");
//     }
//   });
// }
// calc(10, 2)
//   .then((javob) => console.log(javob))
//   .catch((xato) => console.log(xato));
// calc(10, 0)
//   .then((javob) => console.log(javob))
//   .catch((xato) => console.log(xato));

//6task
// function tekshirFileHajmi(fileSize) {
//   return new Promise((resolve, reject) => {
//     if (fileSize <= 5 * 1024 * 1024) {
//       resolve("File yuklandi");
//     } else {
//       reject("File hajmi juda katta");
//     }
//   });
// }
// tekshirFileHajmi(3000000)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// tekshirFileHajmi(6000000)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//7task
// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     const correctUsername = "admin";
//     const correctPassword = "12345";

//     if (username === correctUsername && password === correctPassword) {
//       resolve("Tizimga kirdingiz");
//     } else {
//       reject("Login yoki parol noto'g'ri");
//     }
//   });
// }

// login("admin", "12345")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// login("user", "wrong")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//8task
// function requestData() {
//   return new Promise((resolve, reject) => {
//     const timeout = setTimeout(() => {
//       reject("Timeout xatosi");
//     }, 3000);
//     setTimeout(() => {
//       clearTimeout(timeout);
//       resolve("Ma'lumotlar olindi");
//     }, 2000);
//   });
// }
// requestData()
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//9task
// function arrFilter(arr) {
//   return new Promise((reolve, reject) => {
//     if (arr.every((item) => typeof item === "number")) {
//       reolve("Barcha elementlar raqam");
//     } else {
//       reject("Noto'g'ri element turi");
//     }
//   });
// }
// arrFilter([1, 2, 3])
//   .then((data) => console.log(data))
//   .catch((xato) => console.log(xato));
// arrFilter([1, "a", 3])
//   .then((data) => console.log(data))
//   .catch((xato) => console.log(xato));

//10task

// function checkUrl(url) {
//   const arr = url.split("https://");
//   const arr2 = url.split(".");
//   return new Promise((resolve, reject) => {
//     if (arr.length == 2 && arr2[arr.length - 1] == "com") {
//       resolve("url togri ");
//     } else {
//       reject("url notogri");
//     }
//   });
// }
// checkUrl("https://google.com")
//   .then((data) => console.log(data))
//   .catch((xato) => console.log(xato));
// checkUrl("wrong_url")
//   .then((data) => console.log(data))
//   .catch((xato) => console.log(xato));

//11task
// function validateCardNumber(cardNumber) {
//   return new Promise((resolve, reject) => {
//     if (cardNumber.length === 16 && /^[0-9]+$/.test(cardNumber)) {
//       resolve("Karta raqami to'g'ri");
//     } else {
//       reject("Karta raqami noto'g'ri");
//     }
//   });
// }

// validateCardNumber("1234567890123456")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// validateCardNumber("12345")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//12task
// function balance(accountBalance, withdrawalAmount) {
//   return new Promise((resolve, reject) => {
//     if (withdrawalAmount <= accountBalance) {
//       resolve("Pul yechildi");
//     } else {
//       reject("Mablag' yetarli emas");
//     }
//   });
// }

// balance(1000, 500)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// balance(1000, 1500)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//13task
// function validateEmail(email) {
//   return new Promise((resolve, reject) => {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (emailPattern.test(email)) {
//       resolve("Email to'g'ri");
//     } else {
//       reject("Noto'g'ri email formati");
//     }
//   });
// }

// validateEmail("test@mail.com")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// validateEmail("wrongemail")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//14task
function checkNumber(number) {
  const arr = number.split("+998");
  return new Promise((resolve, reject) => {
    if (arr.length == 2 && number.split("").length == 13) {
      resolve("raqam togri ");
    } else {
      reject("raqam notogri");
    }
  });
}
checkNumber("+998901234567")
  .then((data) => console.log(data))
  .catch((xato) => console.log(xato));
checkNumber("901234567")
  .then((data) => console.log(data))
  .catch((xato) => console.log(xato));
