//Напишите функцию, которая сортирует массив алгоритмом слияния.
let test = [12,2142241,1,5,7,1,5,7,9999,4343,643645,85651,9, 241, 3124,21]
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let elemsInChunk = Math.floor(array.length / 2);
    let array1 = array.slice(0, elemsInChunk);
    let array2 = array.slice(elemsInChunk);
    return merge(mergeSort(array1), mergeSort(array2))
}

function merge(array1, array2) {
    let i = 0;
    let j = 0;
    let result_array = [];
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result_array.push(array1[i]);
            i += 1;
        } else {
            result_array.push(array2[j]);
            j += 1;
        }
    }
    if (i < array1.length) {
        result_array.push(...array1.slice(i));
    } else if (j < array2.length) {
        result_array.push(...array2.slice(j));
    }
    return result_array;
}
console.log(mergeSort(test));