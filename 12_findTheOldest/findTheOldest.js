const findTheOldest = function(people) {
    const findTheOldest = function(array) {
        return array.reduce((oldest, currentPerson) => {
          const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
          const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
          return oldestAge < currentAge ? currentPerson : oldest;
        })
      };
      
      const getAge = function(birth, death) {
        if (!death) {
          death = new Date().getFullYear();
        }
        return death - birth;
      };

};
// copypasta from solutions
// Do not edit below this line
module.exports = findTheOldest;

/*https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/ */