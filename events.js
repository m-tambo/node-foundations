const { EventEmitter } = require('events');
const emitter = new EventEmitter();


// create an event handler
let connectHandler = () => {
  console.log ('connection successful')

  // fire the data_received event
  emitter.emit('data_received')
}

// bind the connection event with the handler
emitter.on('connection', connectHandler)

// bind the data_received event with the anon function
emitter.on('data_received', () => {
  console.log("data received successfully")
})

//fire the connection event
emitter.emit('connection')

console.log("emit function:", emitter.emit)
