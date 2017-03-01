const firstName = ['J','O','H','N']
const lastName = ['D','O','E']
const fullName = [...firstName,' ', ...lastName]

const joiner = (array) => array.join('')

const cheer = function(name) {

    let interval = setInterval( function () {
      for (let i = 0; i < name.length; i++) {
        if (name[i] === 'O' || name[i] === 'E') {
          console.log('GIVE ME AN ' + name[i] + "!")
        } else {
        console.log('GIVE ME A ' + name[i] + "!")
        }
      }
    }, 1000)

}

cheer(firstName)
cheer(lastName)
console.log("What does that spell???")
console.log(joiner(fullName),"!!!")



// ________solution from joe shep_________

// const first = 'Joe'; //const
// const second = 'Shep'; //const

// // object literal shorthand
// const myName = { first, second } //const

// const nodeCheer = ({first, second}) => { // destructuring assignment
//   let name = `${first} ${second}`.toUpperCase(); // string template literals, let
//   [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function
//     let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`. Surprise! It's ES6
//     console.log(`Gimmmie ${conj} ${letter.toUpperCase()}!`); // string template literals again
//   });
//   console.log(`What's that spell?\n${name}!`);
// };

// nodeCheer(myName);
