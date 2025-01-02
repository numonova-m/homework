//1task
/*Massivdagi sonlarni juft va toqlarini alohida massivga ajrating*/
// Input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function checkNumbers() {
//   let juft = [];
//   let toq = [];
//   for (let value of Input) {
//     if (value % 2 === 0) {
//       juft.push(value);
//     } else {
//       toq.push(value);
//     }
//   }
//   return { juft, toq };
// }
// console.log(checkNumbers());

//2task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Talabalar bahosini hisoblash*/
// Input = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Soli", grade: 78 },
// ];

// function checkGreade(Input) {
//   const total = Input.reduce((sum, student) => sum + student.grade, 0);
//   return total / Input.length;
// }
// checkGreade(Input);
// console.log(checkGreade(Input));

//3task
/* Masssivdagi eng ko'p takrorlangan elementni toping
   Input: ['a', 'b', 'a', 'c', 'b', 'a']
   Expected: 'a'*/

//   let kopBaho = Object.keys(baholarMiqdori).reduce((a, b) =>
//     baholarMiqdori[a] > baholarMiqdori[b] ? a : b
//   );

//4task
/*Berilgan so'zlardan eng uzunini toping*/

// function checkLength() {
//   const words = ["apple", "banana", "kiwi", "strawberry"];
//   let longWord = " ";
//   for (let word of words) {
//     if (word.length > longWord.length) {
//       longWord = word;
//     }
//   }
//   return longWord;
// }
// checkLength();
// console.log(checkLength());

//5task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Mahsulotlar narxini umumiy summasi*/

// Input = [
//   { name: "non", price: 2800 },
//   { name: "cola", price: 8500 },
//   { name: "pepsi", price: 8500 },
// ];
// let summa = 0;
// for (let index = 0; index < Input.length; index++) {
//   const element = Input[index];
//   summa += element.price;
// }

// console.log(summa);

//6task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Berilgan massivdagi musbat sonlar yig'indisini toping*/

// Input = [1, -4, 12, 0, -3, 29, -150];
// let total = 0;
// function result() {
//   for (let summa of Input) {
//     if (summa % 2 == 0) {
//       total += summa;
//     }
//   }
//   return total;
// }
// console.log(result());

//7task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Satrni unli harflar sonini hisoblang*/

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   return str.split("").reduce((count, char) => {
//     return vowels.includes(char) ? count + 1 : count;
//   }, 0);
// }
// const input = "Hello World";
// console.log(countVowels(input));

//8task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* n gacha bo'lgan sonlar yig'indisi*/

// let n = 5;
// let summa = 0;
// for (let a = 0; a <= n; a++) {
//   summa += a;
// }
// console.log(summa);

//9task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Darajani hisoblash */

// let asos = 2;
// let daraja = 6;
// const result = asos ** daraja;
// console.log(result);

//10task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Berilgan massivning eng katta elementini toping*/
// Input = [1, 5, 2, 9, 3];
// function checkNumb() {
//   let number = 0;
//   for (let item of Input) {
//     if (item > number) {
//       number = item;
//     }
//   }
//   return number;
// }
// console.log(checkNumb());

//11task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Berilgan sonni raqamlari yig'indisini toping*/

// function sumDigits(number) {
//   if (number === 0) return 0;
//   return (number % 10) + sumDigits(Math.floor(number / 10));
// }
// const input = 123;
// console.log(sumDigits(input));

//12task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*Berilgan N sonigacha juft sonlarni chiqaring*/
// let numb = 8;
// function juftSon() {
//   let total = 0;
//   for (let number = 0; number <= numb; number++) {
//     if (number % 2 == 0) {
//       total += number;
//     }
//   }
//   return total;
// }

// console.log(juftSon());

//13task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
/* Berilgan so'zni teskari o'girib yozing*/
// const input = "hello";
// function reverseString() {
//   let reversed = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     reversed += input[i];
//   }
//   return reversed;
// }
// console.log(reverseString());

//14task~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*Berilgan son tub yoki tub emasligini aniqlang*/
const num = 8;
function isPrime() {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime());
