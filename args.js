#!/usr/bin/env node

const [,, ...args] = process.argv

console.log(args.reduce( (prev, curr) => Number(prev) + Number(curr) ))
