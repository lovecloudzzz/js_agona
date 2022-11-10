//Напишите функцию, которая убирает повторяющиеся значения в массиве.
let test = [12,23123,321312,12,12,23123]
function uniqueArray(array){
    return Array.from(new Set(array))
}
console.log(uniqueArray(test));
