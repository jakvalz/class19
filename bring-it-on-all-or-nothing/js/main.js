// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let x = true
// alert(x)

// Declare a variable, reassign it to your favorite color, and console log the value
let y = "purple"
console.log(y)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNums(a,b,c,d) {
    return (a + b + c) / d
}
console.log(fourNums(2,4,3,2))
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNums(a,b) {
    console.log(a ** b)
}
twoNums(4,2)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function trueString(bool, string) {
    if(bool == true) {
        console.log(string + 5)
    } else {
        console.log(string + 2)
    }
}
trueString(true, 'trick')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead 
// of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" 
// instead of that number
function oneNum(a) {
    for(let i = 1; i <= a; i++) {
            console.log(i)
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    } else if(i % 3 === 0) {
        console.log('fizz')
    } else if(i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log('u trik')
    }
        }
    
}
oneNum(101)