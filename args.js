#!/usr/bin/env node

const [,, ...args] = process.argv

if (args.length === 0) {
  console.log('zip')
}
else {
  console.log(args.reduce( (prev, curr) => Number(prev) + Number(curr) ))
}
