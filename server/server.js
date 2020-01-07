const io = require('socket.io')()
io.on("connection", client => {
    console.log('connected : ' + client.id)
})

const port = 8000
io.listen(port)
console.log("listening on port ", port)