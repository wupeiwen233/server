const express = require("express")
let router = express.Router()
const app = express()
let server = require('http').createServer(app)
let io = require('socket.io')(server)


io.on('connection', function (socket) {
  // socket相关监听都要放在这个回调里
  console.log('a user connected')

  socket.on('disconnect', function () {
    console.log('a user go out')
  })
  socket.on('setmenu', function (obj) {
    io.emit('setmenu', obj);
  })
  socket.on('setname', function (obj) {
    io.emit('setname', obj);
  })
  socket.on('setfood', function (obj) {
    io.emit('setfood', obj);
  })

  socket.on('msg', function (obj) {
  })
})
server.listen(3001)


app.use(require('cors')())
app.use(express.json())
require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000,()=>{
})
