let arr = [90,23,45,18,23,6,3,1,5]
let x = arr.entries()
console.log(...x) //Basically it will return the key value pair of the array .
// and if we do the x , we will get object ... bcz everything in javascript behaves as an object
console.log(typeof(x))

// Now we will see the working of arr.every() 
// Now we will see the working of arr.filter()

function checkAges(ages)
{
    return ages<=10 ;
}
let new_arr = arr.filter(checkAges) ;
console.log(...new_arr)
