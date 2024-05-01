const update=(data)=>{

console.log(data)
  try {
    fetch(`http://localhost:3000/cart`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
  } catch (error) {
     console.log(error.message);
  } 
    

}
export default update;