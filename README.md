# JS Array Iterator Methods and Callback Functions

## Learning Objectives
___

* Understand usefulness and syntax of Array interator methods
  * Be able to use forEach, map, filter and reduce

## Array Iterators vs tradtional for loops
___

Javascript arrays have a bunch of useful functions built into them, such as ones we have used alot already like `Array.push()`and `Array.splice()`. There are also built in *iterators* that can take a callback funciton and then run it on every value in the array. They are incredibly handy!

```javascript
//  an array of animals
let myAnimals = ['cat', 'dog', 'cow', 'ardvark', 'horse']

// use a for loop to log all the animals
for(let i = 0; i < myAnimals.length; i++) {
  console.log(myAnimals[i])
}

// use Array.forEach() to log all the animals
// forEach gives you the values of every index one by one 
// as a parameter in your callback function
myAnimals.forEach(function(animal){
  console.log(animal)
})
```

## How Does That Even Work? 

We can refactor our regular for loop into a function that works like forEach, by making a function that accepts an array and callback as parameters and then invokes the callback in a for loop:

```javascript
// first we refactor our for loop into a function that can log 
// any array that is passed to it
function logArray(array) {
  // iterate over any array passed and log it
  for(let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

// pass in myAnimals array when we invoke our new function to log it
logArray(myAnimals)
```

Thats pretty useful, we can log any array we want, but our function only does one thing. What if we also pass in a second parameter that is a callback? That will be **super** useful -- because we will have a swiss-army function for working with arrays!

```javascript
// refactor our logArray function to loop over the array and
// invoke a callback function in the loop
function callBackOnArray(array, callback) {
  // the loop is more or less the same
  for(let i = 0; i < array.length; i++) {
    // instead of logging the index we invoke our callback on it
    callback(array[i])
  }
}

// we can supply an inline funciton when we invoke our callbackOnArray function
callBackOnArray(myAnimals, function(animal) {
  console.log(animal)
})

```

We just built a DIY forEach, but JS has even more useful iterators!

## Array.map()

Array.map is a handy way to build a new array from a prexisting on. Array.map always needs to return a value, and that return is what is mapped to the new array:

```javascript
// use a for loop to make add extra content to each animal and 
// build a new array 
let myFavAnimals = []
for(let i = 0; i < myAnimals.length; i++) {
  myFavAnimals.push(`I love ${myAnimals[i]}s! They are my favorite!`)
}

console.log(myFavAnimals)

// set the return value of map to a variable:
let mapMyFavs = myAnimals.map((animal) => {
  return `I love ${animal}s! They are my favorite!`
})

console.log(mapMyFavs)
```

  ## Array.filter() 

Array.filter() filters out values from an existing array and creates an new array that doesn't include them. For Array.filter() to work, you need to return a *boolean* of `true` or `false`:

```javascript
// we want to filter cow out of our array
let cowless =  myAnimals.filter((animal) => {
  if(animal != 'cow'){
    return true
  }  else {
    return false
  }
}) 

// no more cow!
console.log(cowless) 
```

## Array.reduce()

Reduce keeps a running total of all the previous operations that your callback returns and 'reduces' the array down to a single value:

```javascript
// concatenate one big string of myAnimals:
let allTogether = myAnimals.reduce((total, animal) => {
  return total + ' ' + animal
})

// all the animals in a single string
console.log(allTogether)
```

It is really easy to find the average of an array of numbers using reduce, for example:

```javascript
const numbers = [99, 68, 45, 101, 87]

const sum = numbers.reduce((total, number) => {
  return total + number
})

// divide the sum by the lenght to find the average
console.log(sum / numbers.length)
```

