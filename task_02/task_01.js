//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
let numbers = [3, -2, 5, 6, -8, 2];


function findNegativeNumber (arrayOfNumbers) {
    let filteredArray = [];

    // for (let i = 0; i < arrayOfNumbers.length; i++) {
    //     if (!(arrayOfNumbers[i] < 0)) {
    //         filteredArray.push(arrayOfNumbers[i])
    //     }
    // }
    // return filteredArray;

    filteredArray = arrayOfNumbers.filter((number) => !(number <= 0))
    return filteredArray
};

findNegativeNumber(numbers)

console.log(findNegativeNumber(numbers));