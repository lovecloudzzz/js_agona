//Напишите функцию replaceAll(find, replace, str), которая заменяет в строке str все вхождение подстроки find на подстроку replace.
let test = "2223 2222 100009 98888 32132"
function replaceAll(find, replace, str){
    return str.replaceAll(find, replace)
}
console.log(replaceAll(222, 1,test));
