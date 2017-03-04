#!/usr/bin/env node
const chalk = require('chalk');

const star = chalk.bgBlue.white("\u2606" + " ")
const star_margin = Array(2).join(" ")
const star_padding = Array(3).join(" ")
const fullLine = Array(50).join(" ")
const partLine = Array(28).join(" ")
let lineColor = ["bgWhite", "bgRed"] // toggle the lines, depending on odd/even (i%2 === 1/0)

for (i = 1; i < 14; i++) {
  if ( i < 8 && (i%2 === 1) ) {
    console.log(chalk.bgBlue((star_margin + (star + star_margin).repeat(7))) + chalk[lineColor[i%2]](partLine))
  } else
  if ( i < 8 && (i%2 === 0) ) {
    console.log(chalk.bgBlue((star_padding + (star + star_margin).repeat(6)) + star_padding)+ chalk[lineColor[i%2]](partLine))
  } else {
    console.log(chalk[lineColor[i%2]](fullLine))
  }
}


//__________first attempt____________
// const line50 = Array(50).join(" ")
// const line30 = Array(31).join(" ")
// const star = chalk.bgBlue.white("\u2606" + " ")
// const star_margin = Array(4).join(" ")
// const star_padding = Array(4).join(" ")
// const starLine1 = Array(20).join(" ")
// const starLine2 = Array(20).join(" ")
// console.log(star)
// console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
// console.log(chalk.bgBlue(starLine2) + chalk.bgWhite(line30))
// console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
// console.log(chalk.bgBlue(starLine2) + chalk.bgWhite(line30))
// console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
// console.log(chalk.bgBlue(starLine2) + chalk.bgWhite(line30))
// console.log(chalk.bgBlue(starLine1) + chalk.bgRed(line30))
// console.log(chalk.bgWhite(line50))
// console.log(chalk.bgRed(line50))
// console.log(chalk.bgWhite(line50))
// console.log(chalk.bgRed(line50))
// console.log(chalk.bgWhite(line50))
// console.log(chalk.bgRed(line50))
