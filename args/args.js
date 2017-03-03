#!/usr/bin/env node

//_____outputs sum of any/all arguments____

const [,, ...args] = process.argv

if (args.length === 0) {
  console.log('zip')
}
else {
  console.log(args.reduce( (prev, curr) => Number(prev) + Number(curr) ))
}
