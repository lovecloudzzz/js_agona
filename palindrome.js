//Напишите функцию, которая проверяет является ли строка палиндромом или нет (возвращает true или false).
let test = "Anna"
function palindrome(str) {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
}
console.log(palindrome(test));