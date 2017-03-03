#!/usr/bin/env node
const chalk = require('chalk');


const line50 = Array(50).join(" ")
const line30 = Array(31).join(" ")
const star = "\u2606"
const star_margin = Array(4).join(" ")
const star_padding = Array(4).join(" ")
const starLine1 = Array(20).join(" ")
const starLine2 = Array(20).join(" ")

console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
console.log(chalk.bgBlue(starLine2) + chalk.bgWhite(line30))
console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
console.log(chalk.bgBlue(starLine2) + chalk.bgWhite(line30))
console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
console.log(chalk.bgBlue(starLine2) + chalk.bgWhite(line30))
console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
console.log(chalk.bgWhite(line50))
console.log(chalk.bgRed(line50))
console.log(chalk.bgWhite(line50))
console.log(chalk.bgRed(line50))
console.log(chalk.bgWhite(line50))
console.log(chalk.bgRed(line50))
