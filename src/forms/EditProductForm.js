import React from 'react'

function EditProductForm() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/products/",{
      method : "GET",
      headers : {
          "Content-Type":"application/json"
      },

  })
    .then((res) => res.json())
    .then((result) =>  setProducts(result))
    .catch((err) => console.log(err)) 
  }, [])
  
  return (
    <div>EditProductForm</div>
  )
}

export default EditProductForm