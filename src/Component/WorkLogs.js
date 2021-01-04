import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function WorkLogs() {
  const [logs, setLogs] = useState([]);


  useEffect(() => {
    fetch("/workLogs")
      .then((response) => response.json())
      .then((data) => {
        setLogs(data);
      });

    return () => {};
  },[]);

  return (
    <div>
      

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Dates</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {logs &&
            logs.map((log, index) => {
              {console.log(log.employee.name)}
              {console.log(log.day_status.date)}
              {console.log(log.day_status.status)}
              return (
                <tr>
                  <th></th>
                  <th>{log.employee.name}</th>
                  <th>{log.day_status.date}</th>
                  <th>{log.day_status.status}</th>
                
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
