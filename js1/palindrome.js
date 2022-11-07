//Напишите функцию, которая проверяет является ли строка палиндромом или нет (возвращает true или false).
let test = 'A man, a plan, a canal, Panama!'
function palindrome(str) {
    str = str.replace(/\.|\,| |\!|\?|\'|\"|\/|\\|\-|\_|\+|\‘|\’/g, '')
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
}
console.log(palindrome(test));