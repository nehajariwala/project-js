import navbar from "../componants/nav.js";
import update from "../componants/patch.js";




document.getElementById("navbar").innerHTML = navbar()

const getdata = () => {
  fetch("http://localhost:3000/products")
    .then((Response) => Response.json())
    .then((Response) => uimaker(Response))
}

getdata()


 

const isexits = (ele) => {

  fetch(`http://localhost:3000/cart/${ele.id}`)
    .then((Response) => Response.json())
    .then((data) => {

      alert("alredy exists")
    })
    .catch((error) => {
      ele.qty=1
      update(ele)
    })
}



const uimaker = (data) => {

  document.getElementById("container").innerHTML = ""
  data.map((ele) => {


    let title = document.createElement("h2")
    title.innerHTML = ele.title

    let img = document.createElement("img")
    img.src = ele.Image

    let price = document.createElement("p")
    price.innerHTML = ele.price

    let category = document.createElement("h3")
    category.innerHTML = ele.category

    let btn = document.createElement("button")
    btn.innerHTML = "Buy"
    btn.addEventListener("click", () => isexits(ele))
    let div = document.createElement("div")
    div.append(img, title, category, price, btn)
    document.getElementById("container").append(div)


  })
}