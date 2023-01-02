import React from 'react'

function Log( log ) {
  if(Object.keys(log).length === 0){
    console.log("as")
    return null;
  }
  else{
    return (
      <tr>
          {log.key.sessionId != null ? <td>{log.key.sessionId}</td>: null}
          {log.key.sessionLineNum != null ? <td>{log.key.sessionLineNum}</td>: null}
          {log.logTime != null ? <td>{log.logTime}</td>: null}
          {log.userName != null ? <td>{log.userName}</td>: null}
          {log.databaseName != null ? <td>{log.databaseName}</td>: null}
          {log.processId != null ? <td>{log.processId}</td>: null}
          {log.connectionFrom != null ? <td>{log.connectionFrom}</td>: null}
          {log.commandTag != null ? <td>{log.commandTag}</td>: null}
          {log.sessionStartTime != null ? <td>{log.sessionStartTime}</td>: null}
          {log.virtualTransactionId != null ? <td>{log.virtualTransactionId}</td>: null}
          {log.transactionId != null ? <td>{log.transactionId}</td>: null}
          {log.errorSeverity != null ? <td>{log.errorSeverity}</td>: null}
          {log.sqlStateCode != null ? <td>{log.sqlStateCode}</td>: null}
          {log.message != null ? <td>{log.message}</td>: null}
          {log.detail != null ? <td>{log.detail}</td>: null}
          {log.hint != null ? <td>{log.hint}</td>: null}
          {log.internalQuery != null ? <td>{log.internalQuery}</td>: null}
          {log.internalQueryPos != null ? <td>{log.internalQueryPos}</td>: null}
          {log.context != null ? <td>{log.context}</td>: null}
          {log.query != null ? <td>{log.query}</td>: null}
          {log.queryPos != null ? <td>{log.queryPos}</td>: null}
          {log.location != null ? <td>{log.location}</td>: null}
          {log.applicationName != null ? <td>{log.applicationName}</td>: null}
          {log.backendType != null ? <td>{log.backendType}</td>: null}
          {log.leaderPid != null ? <td>{log.leaderPid}</td>: null}
          {log.queryId != null ? <td>{log.queryId}</td>: null}
      </tr>
    )
  }
  
}

export default Log