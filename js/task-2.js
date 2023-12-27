// Оголоси функцію getShippingMessage, яка очікує три параметри,
//     значення яких будуть задаватися під час її виклику:

// country — перший параметр, рядок, що містить країну доставки
// price — другий параметр, число, що містить загальну вартістьовару
// deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням
// про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:

// <country> — це країни доставки
// <totalPrice> — це загальна вартість замовлення, що включає вартість
// товару і його доставки

// function getShippingMessage(country, price, deliveryFee) {
//     const totalPrice = (price + deliveryFee);
//     return(`Shipping to ${country} will cost ${totalPrice} credits`)
// }
// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));


// ********************* Задача 2. Форматування повідомлення **********

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок(параметр message)
// та перевіряє його довжину відповідно до заданої максимальної довжини(параметр maxLength).

// Доповни код функції таким чином, що:
// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий
// рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів,
//     додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return (message);
//     } else {
//         message = message.slice(0, maxLength);
//         return (`${message}...`);
//     }
//   }
    
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// ****************** 2  ****************
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray(масив),
//     secondArray(масив) і maxLength(число).Функція повинна створювати новий масив,
//         який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути
//  копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

function makeArray(firstArray, secondArray, maxLength) {
    const newArray = [];
    let num = firstArray.length;
    for (let i = 0; i < maxLength; i++) {
       if (i < firstArray.length) {
           newArray.push(firstArray[i]);
       } else {
           let j = i - num;
           newArray.push(secondArray[j]);
       }     
   }
    return newArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


 