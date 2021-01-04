import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import {Link,useHistory} from "react-router-dom"

export default function DateSelector1() {
  const [workStatus, setworkStatus] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const history = useHistory();


  var obj = localStorage.getItem("user")
console.log(obj)

  function handleChange(date) {
    setstartDate(date);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(startDate);
    console.log(workStatus);

    fetch("/fillSheet", {
      method: "post",
      headers: {
        "authorization": "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
      },
      body: JSON.stringify({
        employee: localStorage.getItem("user"),
        day_status: { date: startDate, status: workStatus },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        //  M.toast({ html: data.error, classes: "#f44336 red" });
        } else {
         console.log("finish")
        //  dispatch(logIn());
          history.push("/");
        }
      });
  }

  function status(e) {
    console.log(e.target.value);
    setworkStatus(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <div>
            {" "}
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <label style={{ fontSize: "20px" }}>Status:</label>
            </div>
            <div>
              <select
                style={{ display: "block", width: "100px", marginLeft: "16px" }}
                id="workStatus"
                onChange={status}
              >
                <option value="select">Select</option>
                <option value="Leave">Leave</option>
                <option value="Work">Work</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
