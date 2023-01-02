import React from 'react'
import { Table } from 'react-bootstrap'
import Log from '../components/Log.js';
function Logs() {
    const [logs, setLogs] = useState([" "])
    useEffect(() => {
        fetch("http://localhost:8080/logs/",{
            method : "GET",
            headers : {
                "Authorization": localStorage.getItem("tokenKey"),
                "Content-Type":"application/json"
            },
           
        })
          .then((res) => res.json())
          .then((result) =>  setLogs(result))
          .catch((err) => console.log(err))
      
    }, [logs])
    
  return (
    <Table>

      <thead>
        <tr>
          <th>sessionId</th>
          <th>sessionLineNum</th>
          <th>logTime</th>
          <th>userName</th>
          <th>databaseName</th>
          <th>processId</th>
          <th>connectionFrom</th>
          <th>commandTag</th>
          <th>sessionStartTime</th>
          <th>virtualTransactionId</th>
          <th>transactionId</th>
          <th>errorSeverity</th>
          <th>sqlStateCode</th>
          <th>message</th>
          <th>detail</th>
          <th>hint</th>
          <th>internalQuery</th>
          <th>internalQueryPos</th>
          <th>context</th>
          <th>query</th>
          <th>queryPos</th>
          <th>location</th>
          <th>applicationName</th>
          <th>backendType</th>
          <th>leaderPid</th>
          <th>queryId</th>
        </tr>
      </thead>

      <tbody>
        {logs.map((log) => <Log log = {log}/>)}
      </tbody>
      
    </Table>
  )
}

export default Logs