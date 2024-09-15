const express = require("express")
const homeRouter = require('./routes/home')
const path = require('path')
const http = require("http")
const { Server } = require("socket.io");

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = 8000

// Scoket.io
// io.on("connection", (socket) => {
//     console.log("New user: ", socket.id);
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// })

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"))

app.use(express.static(path.resolve("./views")))
app.use("/", homeRouter)

server.listen(PORT, () => console.log(`Server has started at PORT: ${PORT}`))