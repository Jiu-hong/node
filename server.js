const Express = require("express")
const Cors = require("cors")
const app = Express()
//app.use(Cors())


app.get("/" ,(request, response)=>{
    response.send("hello world")
})

app.listen(4000,()=>{console.log("I am listening on 4000")})