console.log("From index.js")


const weatherForm=document.querySelector('form')
const inp=document.querySelector('input')
const out=document.querySelectorAll('input')[1]
weatherForm.addEventListener("submit",(event)=>{
  event.preventDefault()
  console.log(inp.value)
  fetch("/weather?address="+encodeURIComponent(inp.value)).then((res)=>{
    res.json().then((datas)=>{
      if(datas.error){
        console.log(datas.error)
      }
      else{
        console.log(datas.data)
        out.value=datas.data

      }
    })
  })

})
