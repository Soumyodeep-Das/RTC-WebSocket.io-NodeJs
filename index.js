const express = require("express")
const homeRouter = require('./routes/home')
const path = require('path')

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"))

app.use("/", homeRouter)

app.listen(PORT, () => console.log(`Server has started at PORT: ${PORT}`))