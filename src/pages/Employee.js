import React, { useEffect } from 'react'

function Employee() {

    const [unshipped, setUnshipped] = uUeState([])

  useEffect(() => {
    fetch("http://localhost:8080//unshipped/" + localStorage.getItem("currentUser"),{
      method : "POST",
      
      headers : {
          "Authorization": localStorage.getItem("tokenKey"),
          "Content-Type":"application/json"
      },
      body : JSON.stringify({
          addressId: selectedAddress,
          orderList: orderList

      }),
     
  })
    .then((res) => res.json())
    .then((result) =>  setUnshipped(result))
    .catch((err) => console.log(err));
  
    
  }, [])
  

  return (
    <div>Employee</div>
  )
}

export default Employee