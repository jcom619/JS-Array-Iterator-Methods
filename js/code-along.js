// a space for your code along notes 🏄‍♀️
let myFruits = ['bananna', 'mango', 'apple', 'pear', 'strawberry', 'raspberry',];

// myFruits.push('blackberry');

// myFruits.forEach(function(fruit) {
//     console.log(fruit);
// })

// DIY forEach
// brain of callback iterator array method
// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i])
//         // console.log(array[i]); 
        
//     }
// }
// myForEach(myFruits, function(fruit) {
//     console.log(fruit);
// })

// // map
// let myFavoriteFruit = myFruits.map(function(fruit) {
//     return `One of my favorite fruits is ${fruit}`
// })
// console.log(myFavoriteFruit);

// filter
// let myFilteredFruits = myFruits.filter(function(fruit) {
//     if(fruit != 'bananna') {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(myFilteredFruits);

// let allTheFruits = myFruits.reduce(function(total, fruit) {
//     return total + ' ' + fruit
// })
// console.log(allTheFruits);