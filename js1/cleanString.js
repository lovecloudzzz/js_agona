// Напишите функцию, которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
let test = "word ,./ ?; : Word []{} =+-!@#$%^&* 123"
function cleanString(str) {
    return str.replace(/\W/g, "")
}
console.log(cleanString(test));