function type_check_v1(element, type) {
    if (Array.isArray(element)){
        return "array" === type;
    }
    return typeof element === type;
}

console.log(type_check_v1([], "array"));

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