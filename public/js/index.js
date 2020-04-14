console.log("From index.js")


const weatherForm=document.querySelector('form')
const inp=document.querySelector('input')
const out=document.querySelector('.output')

weatherForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  console.log(inp.value)
  out.innerHTML="Loading...."
  fetch("/weather?address="+encodeURIComponent(inp.value)).then((res)=>{

    res.json().then((datas)=>{
      if(datas.error){
        out.innerHTML=datas.error
      }
      else{
        console.log(datas.data)
        out.innerHTML=datas.data

      }
    })
  })

})
