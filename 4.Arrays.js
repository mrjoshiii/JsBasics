console.log("Array in Javascript")
let arr = [55,10,45,18,4,5,2,1] ;

// 1.push()
let x = arr.push(5)
console.log(...arr)
// console.log(typeof(x)) starting from 1 to end 
arr.pop() ;
console.log(...arr)

// Converting arrays to string :
arr.toString() ;
console.log(...arr)
// after converting the array to string we can apply all the string functions to it.

// let joins = arr.join("+")
// console.log(joins)

let s = arr.shift()
console.log(...arr)  //Takes the shifted value as x and unshifting the x as values.

arr.unshift(s)
console.log(...arr)