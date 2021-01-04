import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

export default function P_signIn() {
  const [password, setpassword] = useState("");
  //const dispatch = useDispatch()
  const [email, setemail] = useState("");
  const history = useHistory();
  console.log("object");

  useEffect(() => {
    console.log("SignIn Component mounted");
    return () => {
      console.log("SignIn Component Unmounted");
    };
  }, []);

  function postDetails() {
    console.log("inside post details")
    fetch("/psignIn", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          M.toast({ html: data.error, classes: "#f44336 red" });
        } else {
          M.toast({ html: data, classes: "#f44336 red" });
          M.toast({ html: data.token, classes: "#f44336 red" });
          M.toast({ html: data.employer, classes: "#f44336 red" });
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.employer));
          // dispatch(logIn())
          history.push("/workLogs");
        }
      });
  }

  return (
    <div>
      <div className="card ">
        <h2 className="brand-logo">Employer LogIn</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>
        <div>
          <button
            className="btn waves-effect waves-light"
            onClick={postDetails}
          >
            LogIn
          </button>
           <h4>
             New in company ? <Link to="/pSignUp">signUp</Link>
          </h4>
          <h4> Employee ? </h4><Link to="/cSignIn">signIn</Link> 

        </div>
      </div>
    </div>
  );
}
