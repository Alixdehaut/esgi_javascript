function isString(string) {
    if (typeof string!= "string") {
        return '';
    }
}

function ucfirst(string) {
    if (string.length > 0) {
        return string[0].toUpperCase() + string.substring(1);
    } else {
        return string;
    }
}

function capitalize(string) {
   let splittedString = string.split(' ');
   for (let i = 0; i < splittedString.length; i++){
       splittedString[i] = ucfirst(splittedString[i]);
    }
   return splittedString.join(' ');
}

function camelCase(string) {
    let str = capitalize(string);
    let regex = / /gi;
    return str.replace(regex, '');
}

function snake_case(string) {
    let str = string.trim().toLowerCase();
    if (string.split(' ').length > 1){
        let regex = / /gi;
        return str.replace(regex, '_');
    }
    return str;
}

function leet(string) {
   let cryptage = {'A': 4, 'E': 3, 'I': 1, 'O': 0 ,'U' :'_', 'Y':7};
    for (let i = 0; i < string.length; i++){
        switch (string[i]) {
            case /a/i:
                string = string.replace(/a/gi, '4');
                break;
            case /e/i:
                string = string.replace(/e/gi, '3');
                break;
            case /i/i:
                string = string.replace(/i/gi, '1');
                break;
            case /o/i:
                string = string.replace(/o/gi, '0');
                break;
            case /u/i:
                string = string.replace(/u/gi, '_');
                break;
            case /y/i:
                string = string.replace(/y/gi, '7');
                break;
        }
    }
    return string;
}

console.log(ucfirst('hello world'));
console.log(capitalize('hello world'));
console.log(camelCase('et coucou les copAins ! '));
console.log(snake_case('Niec Vroum'));
console.log(leet('ANACONDA'));