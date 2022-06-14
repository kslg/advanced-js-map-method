  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

  // To create a new array containing each of these numbers multiplied by 2.  
let nums = [1, 2, 3, 4, 5];
let results = []; // empty array
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);



// Simplified w/ map()
const newArr = nums.map(myFunction)
function myFunction(num) {
  return num * 2;
}
console.log(newArr);

// Simplfied w/ map() + arrow function
let myFunc = nums.map(num => num * 2) ;
console.log(myFunc);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
const studentsWithIds = students.map(student => [student.name, student.id])
console.log(studentsWithIds)
  // output: [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]