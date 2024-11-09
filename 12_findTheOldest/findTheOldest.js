/* # Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
*/

const findTheOldest = function(listOfPeople) {

//i want to use the reduce method, to return the single oldest object in array of listOfPeople    
let oldestPerson = listOfPeople.reduce((oldest,current) => {

    //define variables
    let oldestAge = 0;
    let currentAge =0; 


    //case 1, oldest is undefined
    if ((oldest.yearOfDeath === undefined))
    {
        let oldestDateNow = new Date();//returns current date
        let oldestYearNow = oldestDateNow.getFullYear(); //return current year
        oldestAge = oldestYearNow - oldest.yearOfBirth; //age of person now
        currentAge = current.yearOfDeath - current.yearOfBirth; //age of person next in list 
    }
    //case 2, current is undefined, 
    if ((current.yearOfDeath === undefined))
    {
        let currentDateNow = new Date();
        let currentYearNow = currentDateNow.getFullYear(); 
        currentAge = currentYearNow - current.yearOfBirth; 
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth; //oldest age
    }

    //case 3, there are no undefined 
    if ((oldest.yearOfDeath !== undefined) && (current.yearOfDeath !== undefined))
    {
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth; //oldest age
        currentAge = current.yearOfDeath - current.yearOfBirth; //age of person next in list 
    }
    if(oldestAge < currentAge)  //if new age of person is older, update the oldest placeholder object to new person object
    {
        oldest = current; 
    }

    return oldest;
});

return oldestPerson;

};


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people); 




// Do not edit below this line
module.exports = findTheOldest;
