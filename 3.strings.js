let string = "ABCDABCD" ;
console.log(string.indexOf("A")) ; //only gives first occurence
console.log(string.includes("Abhishek"))
console.log(string.lastIndexOf('A')) 
console.log(string.search("AB")) //only gives first occurence

// Slicing : 
console.log(string.slice(0,-3));
// console.log(string.substring(0,-1)); //Substring does not take negative values 
console.log(string.substr(1,4)) ; //It also behaves as same ,do not negative values 
let string2 = "   ABC   "
console.log(string2.trim()) ;
// trim cuts the spaces
console.log(string2) ;



// Converting string into array : 
let str = "a,a,a,a,b,b,b,,c,d,e,f,g,h,i,j,k" ;
let arr = str.split(",");
console.log(arr)
let text = "" ;
for(let i = 0 ; i < arr.length ; i++)
{
    text = text + arr[i] ;
}
console.log(text)
console.log(text.includes('a'))
console.log(text.repeat(2)) //Repeats the string by n times 























