import React, { useEffect } from "react";
import {Link,useHistory} from "react-router-dom"
import { useState } from "react";
import M from "materialize-css"

//React Router ships with a few hooks that let you access the state of the router and perform navigation
//from inside your components.
//useHistory:The useHistory hook gives you access to the history instance that you may use to navigate.
//useLocation
//useParams
//useRouteMatch

export default function C_signUp() {

  var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;

  const history =useHistory()
  const [name, setname] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  useEffect(() => {
    console.log("SignUp mounting")
    return () => {
      console.log("SignUp Unmounting")

    }
  }, [])

  function postDetails(){

    if(!re.test(email)){
    //    M.toast({html:"invalid email",classes:"#f44336 red"})
    }
    fetch("/csignUp",{

        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(
         {name,
          email,
          password
         })

    }).then(res=>res.json()).then(data=>{

      if(data.error){
        console.log(data.error)
        M.toast({html:data.error,classes:"#f44336 red"})
      }
      else{
        M.toast({html:data,classes:"#f44336 red"})
        history.push("/cSignIn")        

      }
    })
  }
  return (
    <div>
      <div className="card ">
        <h2 className="brand-logo">Please enter your details</h2>
        <input type="text" placeholder="name"     onChange={(e)=>setname(e.target.value)}></input>
        <input type="text" placeholder="email"    onChange={(e)=>{setemail(e.target.value)}}></input>
        <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}></input>
        <div>
        <button className="btnSignUp" onClick={postDetails}>SignUp</button>
        <h4>Registered employee ? </h4><Link to="/cSignIn">signIn</Link>
        {/* <h4> Employer ? </h4><Link to="/pSignIn">signIn</Link> */}

        </div>
      </div>
    </div>
  );
}
