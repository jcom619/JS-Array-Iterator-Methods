console.log('~~~~~~~~~~~~~~ reduce solutions ~~~~~~~~~~~~~~')

// (1) Using reduce, take the array 'nums' and return the product of all the numbers
// via multiplication

const nums = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!
let product = nums.reduce(function (total, acc){
  return total * acc;
})

console.log(product)

// (2) following the example of how we made a DIY forEach function, build off it and make a DIY reduce funciton
// your DIY reduce function should take an array and a callback as an arguments and return a new array

// using a loop
function myReduce(array, callback) {
  let accumulator = array[0]
  for(let i = 1; i < array.length; i++) {
    // instead of logging the index we invoke our callback on it
    callback(accumulator, array[i])
  }
  return output
}


