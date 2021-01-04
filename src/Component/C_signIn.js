import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

export default function C_signIn() {
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
    fetch("/csignIn", {
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
          M.toast({ html: data.employee, classes: "#f44336 red" });
          console.log(data.employee)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.employee));
          // dispatch(logIn())
          history.push("/home");
        }
      });
  }

  return (
    <div>
      <div className="card ">
        <h2 className="brand-logo">Employee SignIN</h2>
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
            New in company ? <Link to="/cSignUp">signUp</Link>
          </h4>
          <h3> Employer ? <Link to="/pSignIn"> SignIn</Link></h3>
        </div>
      </div>
    </div>
  );
}
