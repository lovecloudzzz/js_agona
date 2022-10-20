//Напишите функцию, которая осуществляет поиск в отсортированном массиве с помощью алгоритма бинарного поиска.
let test = [1,2,3,4,5,6,7,8,9,10]
function binaryFind(elem, array, le= 0, ri= array.length - 1){
    let centerIndex = Math.floor((le + ri) / 2);
    let centerElement = array[centerIndex];
    if (le === ri) {
        return array[le] === elem;
    }
    if (elem === centerElement) {
        return true;
    } else if (elem < centerElement) {
        return binaryFind(elem, array, le, centerIndex - 1);
    } else {
        return binaryFind(elem, array, centerIndex + 1, ri);
    }
}
console.log(binaryFind(10, test));
