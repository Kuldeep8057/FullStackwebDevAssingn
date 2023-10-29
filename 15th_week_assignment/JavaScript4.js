function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const example = { name: "Kuldeep", age: 25 };
console.log(hasProperty(example, "age")); //
console.log(hasProperty(example, "email"));
