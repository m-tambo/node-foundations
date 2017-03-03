//__________live demo with joe shep___________

// const { createReadStream } = require('fs')

// const readStream = createReadStream('names.txt')

// // readStream.pipe(process.stdout)

// readStream.on('data', (buffer) => {
//   readStream.pause()
//   process.stdout.write(buffer.toString())
// })

// const timer = setInterval(() => readStream.resume(), 2000)

// readStream.on('end', () => {
//   clearInterval(timer)
// })


//_____________chaining pipes together______________
const { Readable, Writable, Transform } = require('stream')

const readStream = Readable()
const transformStream = Transform()
const writeStream = Writable()

let i = 0

readStream._read = () => {
  if (i > 100) {
    readStream.push(null)
  } else {
    setTimeout( () => readStream.push(`${i++}`), 1000)
  }
}

transformStream._transform = (buffer, encoding, done) => {
  setTimeout( () => done(null, `${(Number(buffer) * 2)}`), 10)
}

writeStream._write = (buffer, encoding, done) => {
  process.stdout.write(`${buffer}\n`)
  setTimeout(done, 50)
}

readStream.pipe(transformStream).pipe(writeStream)
