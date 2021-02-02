// (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.
const people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];


const isCool = function(person) {
	return person.coolnessScore > 20;
}

// Your code goes here

// (2) Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

const misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]


// Your code goes here

//Your code here

// (3) following the example of how we made a DIY forEach function, build off it and make a DIY filter funciton
// your DIY filter function should take an array and a callback as an arguments and return a new array

//Your code here