console.log('~~~~~~~~~~~~~~ map solutions ~~~~~~~~~~~~~~')

// (1) Write some code using map that takes the array of mneumonics, and returns a two dimensional array.
// For example, the 0th element of the new array should be:
// ['My', 'Very', 'Excellent', 'Mother', 'Just', 'Sent', 'Me', 'Nine', 'Pizzas']

let mneumonics = ['My Very Excellent Mother Just Sent Me Nine Pizzas', 'Please Excuse My Dear Aunt Sally', 'Every Good Boy Does Fine'];

// Your code here!
let splitMneumonics = mneumonics.map(function(element){
  // string.split() method
  return element.split(' ');
})

console.log(splitMneumonics)

// (2) following the example of how we made a DIY forEach function, build off it and make a DIY map funciton
// your DIY map function should take an array and a callback as an arguments and return a new array

//Your code here

// using a loop
function myMap(array, callback) {
  let output = []
  for(let i = 0; i < array.length; i++) {
    // instead of logging the index we invoke our callback on it
    callback(array[i])
  }
  return output
}

// (3) Take the phonebook array and use map to return a new phonebook that includes a country-code that matches the rest of the phone number.
// For example, the 0th element of the new array should be {Abe: "1-111-111-1111"}

let phoneBook = [
  {Abe: "111-111-1111"},
   {Bob: "222-222-2222"},
   {Cam: "333-333-3333"},
   {Dan: "444-444-4444"},
   {Ern: "555-555-5555"},
   {Fry: "111-111-1111"},
   {Gil: "222-222-2222"},
   {Hal: "333-333-3333"},
   {Ike: "444-444-4444"},
   {Jim: "555-555-5555"},
   {Kip: "111-111-1111"},
   {Liv: "222-222-2222"},
   {Mia: "333-333-3333"},
   {Nik: "444-444-4444"},
   {Oli: "555-555-5555"},
   {Pam: "111-111-1111"},
   {Qiq: "222-222-2222"},
   {Rob: "333-333-3333"},
   {Stu: "444-444-4444"},
   {Tad: "555-555-5555"},
   {Uwe: "111-111-1111"},
   {Val: "222-222-2222"},
   {Wil: "333-333-3333"},
   {Xiu: "444-444-4444"},
   {Yam: "555-555-5555"},
   {Zed: "111-111-1111"}
  ];

let countryCodes = phoneBook.map(function (element){
  // use Object.values() to get the phone number
  let phoneNum = Object.values(element);
  // use Object.keys() to get the name
  let name = Object.keys(element);
  // slice the first number for the country code
  let code = phoneNum[0].slice(0, 1);
  return {
    // [] notation for a variable key when making an object
    [name]: element[name] = code + '-' + phoneNum
  }
})

console.log(countryCodes)