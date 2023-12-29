// Станція з продажу ремонтних дроїдів готова до запуску,
//залишилося написати програмне забезпечення для відділу продажів.
// Оголоси функцію makeTransaction, яка очікує два параметри,
//значення яких будуть задаватися під час її виклику:
// quantity— перший параметр, число, що містить кількість замовлених дроїдів
// pricePerDroid — другий параметр, число, що містить вартість одного дроїда
// Доповни код функції так, щоб вона повертала рядок з повідомленням
//про покупку ремонтних дроїдів:
//"You ordered <quantity> droids worth <totalPrice> credits!", де:
// <totalPrice> — це загальна вартість замовлення,
// тобто вартість усіх замовлених дроїдів

// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = (quantity * pricePerDroid);
//     return (`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// *****************  Задача 1. Замовлення дроїдів

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати
// програмне забезпечення для відділу продажів.Оголоси
// функцію makeTransaction(quantity, pricePerDroid, customerCredits),
//     яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
// Оголоси змінну для зберігання загальної суми замовлення
// (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids
// worth < totalPrice > credits!", де <quantity> це кількість замовлених дроїдів,
// а < totalPrice > це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     let totalSum = quantity * pricePerDroid;
//     if (totalSum <= customerCredits) {
//        return (`You ordered ${quantity} droids worth ${totalSum} credits!`);
//     } else {
//         return (`Insufficient funds!`);
//     }
//  }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// *******************   1  ****************

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title
//  і повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
 
// function slugify(title) {
//     const message = title.split(" ");
//     const slugMess = message.join("-");
//     return (slugMess.toLowerCase());
//  }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//********************* Задача 1. Пакування товарів */

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює,
//     чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — обєкт, у якому ключі містять назви товарів, а їхні значення —
// кількість цих товарів.Наприклад, { apples: 2, grapes: 4 }.
//     containerSize — число, максимальна кількість одиниць товарів, яку в себе
// може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в
// контейнер.Тобто порахувати загальну кількість товарів в обєкті products і
// повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  for (const key in products) {
    sum += products[key];
  }
   if (sum <= containerSize) {
     return "true";
   } else {
     return "false";
   }
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
