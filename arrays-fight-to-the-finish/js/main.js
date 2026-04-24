//Create an array of movie titles. Loop through the array add each element to the h2.
let movies = ['jumanji', 'i am legend', 'the gray man']
let h2 = document.querySelector('h2')
movies.forEach((x) => h2.textContent += x)

//Create an array of numbers. Loop through the array and add three to each number and 
// replace the old number.
let nums = [10, 20, 30]
// nums.forEach((item, idx) => nums[idx] = item + 3)
// console.log(nums)
//Find the average of all the numbers from question two
const average = nums.reduce((initial, current) => initial + current, 0) / nums.length
console.log(average)
let sum = 0
// nums.forEach((num) => sum += num)
for(let i = 0; i < nums.length; i++) {
    // sum += nums[i]
    sum = sum + nums[i]
}
console.log(sum / nums.length)