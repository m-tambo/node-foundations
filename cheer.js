const firstName = ['J','O','H','N']
const lastName = ['D','O','E']
const fullName = [...firstName,' ', ...lastName]

const joiner = (array) => array.join('')

const cheer = function(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] === 'O' || name[i] === 'E') {
      let interval = setTimeout(() => { console.log('GIVE ME AN ' + name[i] + "!") }, 1000 )
    } else {
      let interval = setTimeout(() => { console.log('GIVE ME A ' + name[i] + "!") }, 1000 )
    }
  }
}

cheer(firstName)
cheer(lastName)
// console.log("What does that spell???")
// console.log(joiner(fullName),"!!!")
