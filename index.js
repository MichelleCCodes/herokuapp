const dotenv = require('dotenv').config()
const express = require("express")
const cors = require('cors')
const path = require("path") //another package that allows us to combine strings

const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build"))) // tells express to run the static file in client stuff 
//when first loads


//API is only serving information. You call onto an API. Don't need express to use json here
app.use("/api/*",(_,res)=> {
    res.json({data:"The API is HERE!"})
})

app.use("*",(_,res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port , ()=> {
    console.log(`Server is alive on port ${port}`)
})

//CORS: cross origin resource sharing - will add in specific headers to 
//allow passage 

// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.PORT) 
// console.log(dotenv)
// console.log(dotenv.PORT)
// console.log(proccess.env.FOOD)

