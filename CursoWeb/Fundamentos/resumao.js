// console.log(7/0)

// const string = "guilherme";
// var ss = ""

// console.log(string.substring(1, string.length));
// console.log(string.split(/\w/g))
// console.log(string.substring(1, string.length))
// console.log(string.replace(/e/g,"*"))

let isActive = false

console.log(isActive);

isActive = true

console.log(isActive);

isActive = 1

console.log(!!isActive);


console.log("Os verdadeiros....");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"test")
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log("Os falsos....");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

const valores = []