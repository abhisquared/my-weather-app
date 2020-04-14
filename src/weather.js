const request=require("request")
const yargs= require("yargs")
const temp=require("./getTemp.js")

yargs.command({
  command: "getTemp",
  description: "Get the temperature",
  builder:{
    location:{
      description: "location",
      demandOption:true
    }
  },
  handler(argv){
    temp.getTemperature(argv.location,(error,data)=>{
    console.log("error: " + error)
    console.log("data: " + data)
    })
  }

})
yargs.parse()
