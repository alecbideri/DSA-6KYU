// Array.prototype.decimalfy = function () {
//   const evenNumbers = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] % 2 === 0) {
//       evenNumbers.push(this[i]);
//     }
//   }

//   return evenNumbers;
// };

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].decimalfy();

// for (const index in digits) {
//   console.log(digits[index]);
// }

// for off loops

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const index of digits) {
//   if (index % 2 === 0) {
//     continue;
//   }

//   console.log(index);
// }

// const days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// for (const day of days) {
//   console.log(day[0].toUpperCase() + day.slice(1));
// }

// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];

// const produce = [...fruits, ...vegetables];

// console.log(produce);

// Using rest parameters

const order = [1, 2, 3, 4, "Milk", "Bread"];

const [total, subtotal, tax, ...items] = order;

console.log(total, subtotal, tax, items);
