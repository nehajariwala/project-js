import navbar from "../componants/nav.js";

document.getElementById("navbar").innerHTML=navbar()

const getdata=()=>{
    fetch("http://localhost:3000/products")
    .then((Response)=>Response.json())
    .then((Response)=>uimaker(Response))
}

getdata()
const uimaker=(data)=>{
    
    document.getElementById("container").innerHTML=""
    data.map((ele)=>{


  let title=document.createElement("h3")
  title.innerHTML=ele.title
  
  let img=document.createElement("img")
  img.src=ele.Image
  
  let price=document.createElement("p")
  price.innerHTML=ele.price
  
  let category=document.createElement("h3")
  category.innerHTML=ele.category

  let btn=document.createElement("button")
  btn.innerHTML="buy"
  let div=document.createElement("div")
  div.append(img,title,category,price,btn)
  document.getElementById("container").append(div)
 

    })
}