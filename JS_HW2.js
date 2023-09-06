// Написать функцию, которая получает один аргумент (массив целых чисел:
// положительных и отрицательных) и возвращает сумму положительных чисел.


let numbers = [15, 4, -8, 3, -856, 0, -238];
function sum_of_positive(numbers) {
  let sum = 0;
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] > 0) {
      sum += numbers[n];
    }
  }
  return sum;
}
console.log(sum_of_positive(numbers));


-----------------------------------------------------------------------------

//Написать функцию, которая получает один аргумент (массив целых чисел)
// и возвращает наибольшее число из массива.


let numbers = [15, 4, -8, 3, -856, 0, -238];
function highest_number(numbers) {
  let big_number = numbers[0];
  for (let n = 1; n < numbers.length; n++) {
    if (numbers[n] > big_number) {
      big_number = numbers[n];
    }
  }
  return console.log(`Самое большое число в массиве: ${big_number}`);
}
highest_number(numbers);


------------------------------------------------------------------------------

//Написать функцию, которая получает на входе массив элементов и определяет,
// четное или нечетное ко-во элементов в полученном массиве


let numbers = [15, 4, -8, 3, -856, 0, -238];
function even_or_odd(numbers) {
  if (numbers.length % 2 == 0) {
    console.log(`Чётное количество элементов в массиве!`);
  }
  if (numbers.length % 2 != 0) {
    console.log(`Нечётное количество элементов в массиве!`);
  }
}
even_or_odd(numbers);