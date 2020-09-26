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

  socket.on('msg', function (obj) {
    //延迟3s返回信息给客户端
    setTimeout(function () {
      console.log('the websokcet message is' + obj)
      io.emit('msg', obj)
    }, 3000)
  })
})
server.listen(3001)


app.use(require('cors')())
app.use(express.json())
require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})
