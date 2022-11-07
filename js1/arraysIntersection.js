//Напишите функцию, которая находит пересечение двух массивов.
let test1 = [1,2,3,4,10,12]
let test2 = [1,4,5,6,7,8,11,12]
function arraysIntersection(array1, array2){
    return array1.filter(x => array2.includes(x))
}
console.log(arraysIntersection(test1, test2));