const pic=document.getElementById("pic")

const btn=document.getElementById("get")




getPic = () => {
  fetch("https://randomfox.ca/floof/")
  .then(res=>res.json())
  .then(data =>{ console.log(data)
    pic.innerHTML =`<img src=${data.image} ${data.link}/>`
   
  })
}

btn.addEventListener("click",getPic)