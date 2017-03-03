#!/usr/bin/env node

//___________blocking example___________
// const { readFileSync } = require('fs')
// const fileArg = process.argv[2]

// if (fileArg) {
//   try {
//     const data = readFileSync(fileArg, "")
//     process.stdout.write(data)
//   } catch (err) {
//     console.log('Error:', error.stack)
//   }
// } else {
//   process.exit()
// }
// console.log("This is the synchronous version")


//___________non-blocking example___________
const { readFile } = require('fs')
const fileArg = process.argv[2]

if (fileArg) {
    readFile( fileArg, "", (err, data) => {
      if(err) return console.error(err)
      process.stdout.write(data);
    })
  } else {
    process.exit()
  }
console.log("This is the asynch version")
