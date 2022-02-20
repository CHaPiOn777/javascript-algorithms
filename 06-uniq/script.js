/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/
// function uniq(arr) {
//     let newArr = []
//     arr.reduce((a, b) => {
//         if (!a[b]) {
//             newArr.push(b);
//             a[b] = 1;
//         }
//         return a;
//     }, {})
//     return newArr
// }
function uniq(arr) {
    const newArr = [];
    arr.reduce((a, b) => {
        if (!a[b]) {
            newArr.push(b);
            a[b] = 1;
        }
        return a;
    }, {});
    return newArr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]