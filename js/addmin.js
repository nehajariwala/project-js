import navbar from "../componants/nav.js";

document.getElementById("navbar").innerHTML=navbar()


const handaldata=(e)=>{
    e.preventDefault();

    const postdata = (data) => {
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
    
    }
   
    
        
    let admin={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        Image:document.getElementById("Image").value,
       category:document.getElementById("category").value,

    }
 
    postdata(admin)
   
}
document.getElementById("form").addEventListener("submit",handaldata)