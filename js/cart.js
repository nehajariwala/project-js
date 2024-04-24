import navbar from "../componants/nav.js";
import update from "../componants/patch.js";


document.getElementById("navbar").innerHTML=navbar()



const handalqty=(opr,data)=>{
    if(opr == "+"){
        data.qty += 1
        update(data)
    }
    
}
const handalqty1=(opr,data)=>{
    if(opr == "-"){
        data.qty -= 1
        update(data)
    }
    
}
handalqty1()
handalqty()

const uimaker=(data)=>{

        data.map((ele,i)=>{
                let img=document.createElement("img")
                img.src=ele.Image
                let title=document.createElement("h4")
                title.innerHTML=ele.title

                let td1=document.createElement("td")
                td1.append(img,title)
                td1.setAttribute("class","d-flex")

              let btn1=document.createElement("button")
              btn1.innerHTML="-"

              let qty1=document.createElement("span")
              qty1.innerHTML=ele.qty
              
              let btn2=document.createElement("button")
              btn2.innerHTML="+"

              btn2.addEventListener("click",()=>handalqty("+",ele))
              btn1.addEventListener("click",()=>handalqty1("-",ele))


              let td2=document.createElement("td")
              td2.append(btn1,qty1,btn2)

               let price=document.createElement("p")
               price.innerHTML=ele.price*ele.qty

               let td3=document.createElement("td")
               td3.append(price)

            
            let td4=document.createElement("button")
            td4.innerHTML="DELETE"
            td4.addEventListener("click",()=>{
                cart.splice(i,1)
             uimaker();
       
            })


               let tr=document.createElement("tr")
               tr.append(td1,td2,td3,td4)

               document.getElementById("tbody").append(tr)
        })
         

}
const getdata=()=>{
    fetch("http://localhost:3000/cart")
    .then((res)=>res.json()) 
    .then((data)=>uimaker(data))
}

getdata()

