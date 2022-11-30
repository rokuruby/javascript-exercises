    const findTheOldest = function(array) {
        return array.reduce((oldest, currentPerson) => {
            //reduce is going to create 2 variables, oldest(the accumulator) and currentPerson(the currentvalue), and go through each object in the array and evaluate them. what is an accumulator? it is the result of the previous loop
            //for eg, it pulls the first object in the "people' array and puts it into a new array "oldest". The first object is name: 'Carly yearOfBirth 1942..blabla..
            //it then evaluates the first object with another function which is getAge. which has been declared below
          const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);//pulling yearofbirth and year of death from the "oldest" array. year of birth and year of death will be the inputs for the getAge function called "birth" and "death". The age will be stored in oldestAge
          const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); //current person will be new array variable and will do the same thing, pull another object from the original "people" array and get their age. Age is stored in currentAge
          return oldestAge < currentAge ? currentPerson : oldest;
        })//after that check the age stored in oldestAge vs currentAge with an IF ELSE(the code above written in IF ELSE shorthand). If oldestAge is not older than currentAge person, return the person in the currentPerson array variable. If oldestAge is older, return the person stored in "oldest" array variable. condition ? result1 : result2;. The results will be stored back into oldest for the next loop and The entire code will loop until it finds the ultimate oldest person
      };
      
      const getAge = function(birth, death) {
        if (!death) {//if no year of death yet due to person still living, create a fake year of death to calculate age based on the current year
          death = new Date().getFullYear();
        }
        return death - birth;
      };

// copypasta from solutions
// Do not edit below this line
module.exports = findTheOldest;

/*https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/ */