console.log(7/0)

const string = "guilherme";
var ss = ""

console.log(string.replace(string.substring(1, string.length).split(/\w/g),"*"));
console.log(string.substring(1, string.length).split(/\w/g))
console.log(string.substring(1, string.length))
console.log(string.substring(1, string.length).split(/\w/g).replace("","*"))
ss = string.substring(1, string.length).split(/\w/g).replace("","*")
console.log(ss)