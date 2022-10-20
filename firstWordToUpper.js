// Напишите функцию, которая получает на входе строку и возвращает новую, в которой каждое слово начинается с заглавной буквы.
let test = "тЕстовое прделожение одиН дВа";
function firstWordToUpper(str) {
    return str.replace(/(^|\s)\S/g, function(str) {return str.toUpperCase()})
}
console.log(firstWordToUpper(test));