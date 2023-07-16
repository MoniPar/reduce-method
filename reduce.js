  
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
// console.log(sum);


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
// console.log(totalYrsExperience);

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

// console.log(experienceByProfession);

// Restructure the teamMembers array into an object that looks like this:
// {
//   Developer: ['Andrew', 'Ariel'],
//   Designer: ['Michael', 'Kelly'],
//   Manager: ['Albert']
// }
let namesByProfession = teamMembers.reduce((acc, curr) => {
  
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = [curr.name];
  } else {
    acc[key].push(curr.name);
  }
  return acc; 
}, {});

console.log(namesByProfession);


// Challenge - Use the reduce method to execute a function on each 
// item, resulting in a single object.  The object should be that
// of the student with the highest english score and should show the
// student's name and english score. You can either create the arrow
// function within the reduce method or create a arrow function outside
// and pass it into the reduce method. Use destructuring when you can.

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

// Create a variable named biggest using the keyword conts and assign it a 
// value from using the reduce method on the students array.
// Use either an arrow function inside the reduce method, or create a function
// and pass it into the reduce method.
// Use a default value with the reduce method
// Log out the variable biggest to see the value
const biggest = students.reduce((acc, curr) => {
  acc = acc.max > curr.results.english ? acc: {name:curr.name, max:curr.results.english};  
  return acc;
}, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
  if(max < english) {
      acc = {name:n, max: english};
  }
  return acc;
  }, {name: '', max: 0});
  
console.log(biggest);
*/

// const biggest = () => {
    
//   const max = students.reduce((acc, curr) => {
//       return curr.results.english > acc.results.english ? curr : acc;
//   });
  
//   return (
//       students.map((student) => {
     
//           const BestScore = max.results.english === student.result.english;
     
//           return (
//               {name: student.name, max: student.results.english}
//           );
//      })
//   );
// };
// console.log(biggest);
