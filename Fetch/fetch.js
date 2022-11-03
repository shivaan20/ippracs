let value=document.querySelector('#value')
let button = document.querySelector('#button')

document.getElementById("button").addEventListener('click',()=>{
  fetch('https://catfact.ninja/fact')
  .then(res=>res.json())
  .then(data=>
    {
      value.innerText=data.fact
    })
})