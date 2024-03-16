//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 6, 2, 8, 10, -6]

// Приклад вихідних даних: 9

let arrayOfNumbers = [3, 5, -9, 6, 2, 8, 10, -6]

function findSumOfPositiveNumbers (arrayOfNumbers) {

    return arrayOfNumbers.filter((number) => (number >= 0 && number % 3 === 0)).reduce((acc, num) =>  acc + num, 0);

};

findSumOfPositiveNumbers(arrayOfNumbers);

console.log(findSumOfPositiveNumbers(arrayOfNumbers));

