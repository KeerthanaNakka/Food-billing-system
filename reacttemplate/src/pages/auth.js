import React from "react";
import Home from "./home.js"
class Auth extends React.Component{
    render(){
        return(
<div>
<input type="text" id="user" placeholder="enter username"></input><br/>
    <input type="password" id="pwd" placeholder="enter password"></input><br/>
    <input type="submit" id="submit" value="login" onClick={{Home}}></input></div>);
}
}
export default Auth;
