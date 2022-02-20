/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {

    if (str1.toLowerCase() === str2.toLowerCase()) {
        return false
    }

    const a = str1.toLowerCase().split('');
    const b = str2.toLowerCase().split('');

    a.sort();
    b.sort();
    let flag = true;

    for (let i = 0, j = 0; i < a.length || j < b.length; i++, j++) {
        if (a[i] === b[j]) {
            flag = true;
        } else {
            flag = false;
        }
    }

    return flag;
    // Напишите код здесь
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('up', 'UP')); // true
console.log(anagram('hello', 'bye')); // false