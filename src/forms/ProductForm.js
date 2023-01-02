import React from 'react'

function ProductForm() {
    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const [description,setDescription] = useState("")
    const [img,setImg] = useState("")
    const img2 = Buffer.toString(image);

    function handleName (value){
        setName(value)
    }
    function handleCategory(value) {
        setCategory(value)
    }
    function handlePrice(value) {
        setPrice(value)
    }
    function handleQuantity(value){
        setQuantity(value)
    }
    function handleDescription(value){
        setDescription(value)
    }
    function sendRequest() {
        fetch("http://localhost:8080/products",{
            method : "POST",
            headers : {
                "Authorization": localStorage.getItem("tokenKey"),
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                name: name,
                category : category,
                price: price,
                quantity: quantity,
                description: description,
            })
        })
        .then((res) => res.json())
        .then((result) =>  console.log(result))
        .catch((err) => console.log(err))
    }
  return (
    <Form>
    
    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name of product" onChange={(e) => handleName(e.target.value)}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="1234 Main St" onChange={(e) => handleDescription(e.target.value)}/>
      </Form.Group>

     

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Category</Form.Label>
          <Form.Control onChange={(e) => handleCategory(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>District</Form.Label>
          <Form.Control onChange={(e) => handlePrice(parseInt(e.target.value))}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Street</Form.Label>
          <Form.Control onChange={(e) => handleQuantity(parseInt(e.target.value))}/>
        </Form.Group>
      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add picture</Form.Label>
        <Form.Control type="file" onChange={(e) => testmethod(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={handleForm}>
        Submit
      </Button>
    </Form>
  )
}

export default ProductForm