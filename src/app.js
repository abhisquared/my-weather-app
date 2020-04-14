const path=require("path")
const express=require("express")
const hbs=require("hbs")
const weather=require("./getTemp.js")

const app=express()

const port=process.env.PORT || 3000
const pathToPublic=path.join(__dirname,"../public")
const pathToPartials=path.join(__dirname,"../partials")
app.use(express.static(pathToPublic))


app.set("view engine", "hbs")
hbs.registerPartials(pathToPartials)
app.get("",(req,res)=>{
  res.render("index", {
    title:"Home Page"
  })
})


// app.get("/weather",(req,res)=>{
//   res.render("weather",{
//     title: "Weather page"
//   })
// })
app.get("/weather",(req,res)=>{
  if(!req.query.address){
    return res.send({
      error: "No address was provided in query"
    })
  }
  console.log(req.query.address)
  weather.getTemperature(req.query.address,(error,data)=>{
  res.send({
    error: error,
    data: data
    })
  })
})
app.get("/weather/*",(req,res)=>{
  res.render("404",{
    title: "404",
    errorMessage: "Weather Article not found"
  })
})
app.get("*",(req,res)=>{
  res.render("404",{
    title: "404",
    errorMessage: "Nikal Lavde!"
  })
})
app.listen(port,()=>{
  console.log("Listening to port"+port)
})
