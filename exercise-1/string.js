function isString(string) {
    if (typeof string!= "string") {
        return '';
    }
}

function ucfirst(string) {
    if (typeof string!= "string") {
        return '';
    }
    if (string.length > 0) {
        return string[0].toUpperCase() + string.substring(1).toLowerCase();
    } else {
        return string;
    }
}

function capitalize(string) {
    if (typeof string!= "string") {
        return '';
    }
   let splittedString = string.split(' ');
   for (let i = 0; i < splittedString.length; i++){
       splittedString[i] = ucfirst(splittedString[i]);
    }
   return splittedString.join(' ');
}

function camelCase(string) {
    if (typeof string!= "string") {
        return '';
    }
    let str = capitalize(string);
    let regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, '');
}

function snake_case(string) {
    if (typeof string!= "string") {
        return '';
    }
    let regex = /[^a-z0-9]/g;
    return string.trim().toLowerCase().replace(regex, '_');
}

function leet(string) {
    if (typeof string!= "string") {
        return '';
    }
   const vowel = {'a': 4, 'e': 3, 'i': 1, 'o': 0 ,'u' :'_', 'y':7};
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

let prairie = {
    animal : {
        type :{
            name: "chien"
        },
        gender: "not exist"
    }
};

function prop_access(object, path){
    if(path === null || path.length < 0) return object;
    let segments = path.split('.');
    let cursor = object;
    let segment;
    let i;
    for (i= 0; i < segments.length-1; ++i){
        segment = segments[i];
        cursor = cursor[segment];
    }
    let value =  cursor[segments[i]];
    return (value === undefined ? object.animal.gender : value)
}

// console.log(ucfirst('hello world'));
// console.log(capitalize('hello WORLD'));
// console.log(camelCase('et coucou_les+ copAins ! '));
// console.log(snake_case('Niec Vroum_toTo'));
// console.log(leet('ANACONDA'));
console.log(prop_access(prairie, 'animal.type.name'));