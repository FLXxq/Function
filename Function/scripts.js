/*Задания*/


/* Задание №1
function  factorial(n) {
    let result = 1;
    while (n) {
        result *=n;
        n --;
    }
    return(result)
}
alert(factorial(prompt('Введите целое число')))*/

/*
function  factorial(n) {
    let result = 1
    for (n;n; n--) {
       result *= n
    }
    return(result)
}
alert(factorial(prompt('Введите целое число')))*/

/* Задание №2
function getLongWord(text){
    let split = text.split(' ');
    let longWord;
    for (let i = 0; i < split.length - 1; i++) {
        if (split[i].length > split[i + 1].length) {
            longWord = split[i];
        }
    }
    return longWord
}
alert(getLongWord(prompt('Введите строку')))
*/

/* Задание №3
function getMaxLong (array) {
    let newArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i ++) {
        for ( let j = 0; j < array[i].length - 1; j ++){
            if (array[i][j] < array[i][j + 1]) {
                counter = array[i][j + 1];
            }
        }
        newArray.push(counter);
    }
    return newArray
}
/!*alert(getMaxLong(prompt('Введите массив')))*!/
console.log(getMaxLong([[1, 2, 3], [4, 5], [6, 7, 8, 9]]))*/

/* Задание №4
function getString (string, value) {
    let newString;
    if (string.length > value) {
        newString = string.slice(0, value);
    } else {
        return string;
    }
    return newString + '...';
}
/!*alert(getString(prompt('Введите строку и кол-во символов в строке')))*!/
console.log(getString('MMTRTechnology', 4))
*/

/* Задание №5
function getUpperString (string) {
    let newString = '';
    let split = string.split(' ');
    for (let i = 0; i < split.length; i++) {
        split[i] = capitalize(split[i]);
    }
    return split.join(' ')
}
console.log(getUpperString('Hello my name is Max'))

function capitalize (string) {
    let toUp = string[0].toUpperCase();
    return toUp + string.slice(1);
}*/

/* Задание №6
function getArray (array1, array2, n) {
    let newArray = array2.slice(0, n);
    newArray = newArray.concat(array1);
    newArray = newArray.concat(array2.slice(n));
    return newArray
}
console.log(getArray([1, 2, 3], [4, 5], 1))*/

/* Задание №7
function getArray (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false || array[i] == 0 || array[i] == -0 || array[i] == ""
        || array[i] == '' || array[i] == `` || array[i] == null || array[i] == undefined
        || array[i] == NaN) {
            delete array[i];
        }
    }
    return array;
}
console.log(getArray([0, 'Max', 'NaN', 'Danon', false]))*/

/* Задание №8
function getArray (array) {
    let firstString = array[0];
    let secondString = array[1];
    let counter = 0;
    for (let i = 0; i < firstString.length; i++) {
        for (let j = 0; j < secondString.length; j++) {
            if (firstString[j] == secondString[j]) {
                counter += 1;
                break;
            }
        }
    }
    return counter == firstString.length;
}
console.log(getArray(['abc', 'abcd']))*/

/* Задание №9
function getArray (array, number) {
    let result = [];
    while (array.length > number) {
        result.push(array.splice(0, number))
    }
    if (array.length) {
        result.push(array);
    }
    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = getArray(arr, 3);
for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
}*/

/* Задание №10
function getArray (array, number) {
    if (number >= 1) {
        array = array.concat(number);
        number--;
        return getArray(array, number);
    }
    return array;
}
console.log(getArray([], 4))*/
