// Сделайте функцию, которая считает и выводит количество своих вызовов.

function counter() {
    var res = 1;
    return function() {return res++};
}
let count = counter();
console.log(count());
console.log(count());

//Реализуйте функцию сложения элементов sum(x)(y)(z)

function sum(x) {
    var res = x;

    function next(y) {
        if(y){
            res += y;
            function next(z){
                res +=z
                return res
            }
        }
        return next;
    }
    return next;
}
console.log(sum(2)(1)(3));

//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function randomize() {
    var used = [];
    return function next(){
        let num = Math.floor(Math.random() * 100 + 1);
        while (used.includes(num) === true){
            num = Math.floor(Math.random() * 100);
        }
        used.push(num);
        return used;
    }
}

var a = randomize();
for (var i = 0; i < 100; i++){
    console.log(a().sort(function (a, b) {return a - b;}))
}


// 4
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
