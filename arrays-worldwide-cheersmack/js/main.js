//Create a function that takes in a number. 
// The function should return an array that contains every number from 1 to 
// that number as seperate elements
let arr = []
function num(x) {
    if(x < 1) {
        console.log('give me a bigger number fam')
    } else {
        for(let i = 1; i <= x; i++) {
            console.log(i)
            arr.push(i)
        }
    }
    return arr
}

console.log(num(30))