var empty = {};
console.log("the empty object: ",empty.toString); //toString is an attribute inherited by 'empty' from its parent object or 'prototype'

console.log(Object.getPrototypeOf(empty));