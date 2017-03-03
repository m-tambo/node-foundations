#!/usr/bin/env node
const { words } = require(`superb`)

console.log(words)

// console.log(global) // it's just a big object


// const args = process.argv.slice(2)
    // is the same as
// const args = .filter( (item, index) => index > 1 )
    // is the same as
// const [,, ...args] = process.argv // the fancy es6 way

// console.log(args)
// is the same as
// process.stdout.write(`${args.toString()}\n`) // this is a stream!
