//Напишите функцию, которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.
let test = "251wrtu1hdlop2f=-32 fg-2kfopckdalsdj-q9fsduf89sd97sb"
function unique(str){
    return Array.from(new Set(str)).join('')
}
console.log(unique(test));
