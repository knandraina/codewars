// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
    var hasNumber = /\d/

    if (strng === "") { return "1" }
    var array = "";
    if (hasNumber.test(strng)) {
        array = strng.split(/([0-9]+)/).filter(val => val)
        if (Array.isArray(array) === true) {
            if (array[1]) {
                if (array[1].match(/0+9/g)) {
                    var res = array[1].match(/0+9/g)
                    var str = res[0].substring(0, res[0].length - 2)
                    var number = parseInt(array[1]); number = number + 1; number = String(number)
                    array[1] = (res === null) ? number : str + number
                    return array.join("")
                } else {
                    var res = array[1].match(/00/g);
                    var number = parseInt(array[1]); number = number + 1; number = String(number)
                    array[1] = (res === null) ? number : res + number
                    return array.join("")
                }
            } else if (array[0]) {
                var res = array[0].match(/0+9/g)
                var str = res === null ? "" : res[0].substring(0, res[0].length - 2)
                var number = parseInt(array[0]); number = number + 1; number = String(number)
                array[0] = (res === null) ? number : str + number
                return array.join("")
            }
        }
    } else {
        return strng + "1";
    }
}

// SOLUTION INTELLIGENTE
function incrementString(str) {
    var c = str[str.length - 1];
    switch (c) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8': return str.substring(0, str.length - 1) + (parseInt(c) + 1);
        case '9': return incrementString(str.substring(0, str.length - 1)) + 0;
        default: return str + "1";
    }
}