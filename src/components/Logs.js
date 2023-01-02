import React from 'react'

function Logs() {
    const [logs, setLogs] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/logs/",{
            method : "GET",
            headers : {
                "Authorization": localStorage.getItem("tokenKey"),
                "Content-Type":"application/json"
            },
           
        })
          .then((res) => res.json())
          .then((result) =>  console.log(result))
          .catch((err) => console.log(err))
    
      
    }, [])
    
  return (
    <div>Logs</div>
  )
}

export default Logs