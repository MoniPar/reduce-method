  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr);
// console.log(sum);

// This is how it looks when expanded
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr;
// });
// console.log(sum);
// ----
// Console
// ----
// Accumulator: 0 Current Value: 1 Total: 1
// Accumulator: 1 Current Value: 2 Total: 3
// Accumulator: 3 Current Value: 3 Total: 6
// Accumulator: 6 Current Value: 4 Total: 10
// 10

// In order for the function to execute 5 times (for the 5 elements in the array),
// an initial value needs to be specified like so
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr;
// }, 0);
// console.log(sum);
// ----
// Console
// ----
// Accumulator: 0 Current Value: 0 Total: 0
// Accumulator: 0 Current Value: 1 Total: 1
// Accumulator: 1 Current Value: 2 Total: 3
// Accumulator: 3 Current Value: 3 Total: 6
// Accumulator: 6 Current Value: 4 Total: 10
// 10

// If the initial value was changed to 10, then the reduce method
// will start the summing process at 10, giving a final value of 20
// -----
// Console
// -----
// Accumulator: 10 Current Value: 0 Total: 10
// Accumulator: 10 Current Value: 1 Total: 11
// Accumulator: 11 Current Value: 2 Total: 13
// Accumulator: 13 Current Value: 3 Total: 16
// Accumulator: 16 Current Value: 4 Total: 20
// 20
// This is a good way to add more to a previously calculated subtotal,
// add more items into an existing array, or inject additional
// properties into an existing object.

// This is how the initial value is set on the one liner above
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Albert',
    profession: 'Manager',
    yrsExperience: 8
  }
];
// console.log(teamMembers[0].yrsExperience);
// Totaling a specific object property
let totalYrsExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalYrsExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);

// Restructure the teamMembers array into an object that looks like this:
// {
//   Developer: ['Andrew', 'Ariel'],
//   Designer: ['Michael', 'Kelly'],
//   Manager: ['Albert']
// }
let namesByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.name;
  } else {
    // ????
  }
  return acc;
}, {});

console.log(namesByProfession);