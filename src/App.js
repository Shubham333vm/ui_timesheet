import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Component/Home';
import C_signIn from "./Component/C_signIn"
import P_signIn from "./Component/P_signIn"
import C_signUp from "./Component/C_signUp"
import P_signUp from "./Component/P_signUp"
import WorkLogs from './Component/WorkLogs';



function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
      <C_signIn/>
    </Route>
    <Route  path="/home">
      <Home/>
    </Route>

    <Route exact path="/timeSheet">
      <Home/>
    </Route>
    <Route exact path="/cSignIn">
      <C_signIn/>
    </Route>
    <Route exact path="/pSignIn">
      <P_signIn/>
    </Route>
    <Route exact path="/pSignUp">
      <P_signUp/>
    </Route>
    <Route exact path="/cSignUp">
      <C_signUp/>
    </Route>
    <Route exact path="/workLogs">
      <WorkLogs/>
    </Route>
    </BrowserRouter>

   
  );
}

export default App;
