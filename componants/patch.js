const postdata=(data)=>{


  try {
    fetch(`http://localhost:3000/cart/${data.id}`,{
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })
  } catch (error) {
     console.log(error.message);
  } 
    

}
export default postdata;