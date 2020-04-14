const request=require("request")

const getTemperature=(location,callback)=>{

const url= 'http://api.weatherstack.com/current?access_key=f377d658f00046a1f2c3370d100495fc&query='+encodeURIComponent(location)
request({url:url,json: true},(error,response) =>{
if(error){
  callback("Unable to connect to service")
}
else if(response.body.error){
  callback(response.body.error.info)
}
else{
  callback(undefined,"Temperature in "+response.body.location.name+" is " +response.body.current.temperature)
}
})
}
module.exports={
  getTemperature:getTemperature
}
