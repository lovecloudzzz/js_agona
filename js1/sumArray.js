//Напишите функцию, которая суммирует все значения элементов массива.
let test = [1,2,3,4,5,7,9,0]
function sumArray(array){
    return array.reduce(function(a,b){return(a+b)})
}
console.log(sumArray(test));