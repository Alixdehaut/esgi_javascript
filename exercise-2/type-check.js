function type_check_v1(element, type) {
    if(Array.isArray(element)) return "array" === type;
    if(element === null) return "null" === type;
    // if(element === undefined) return "undefined" === type;
    return typeof element === type;
}

console.log(type_check_v1(undefined, "undefined"));
console.log(type_check_v1(undefined, "object"));
console.log(type_check_v1(null, "null"));
console.log(type_check_v1(null, "object"));
console.log(type_check_v1(function () {}, "function"));

objectToCompare = {type: "string",
                    value: "foo",
                    enum: ["foo", "bar", 3]
                };

myObject = {type: "string",
            value: "foo",
            enum: ["foo", "bar", 3]
        };

function type_check_v2(element, object) {

}