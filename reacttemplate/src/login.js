
import React from "react";
import axios from "axios";
import "./login.css"
import { Link } from 'react-router-dom';

import {useHistory} from "react-router-dom"
const SUCCESS_LOGIN = "User details are correct";

class Login extends React.Component{
    constructor(props)
    {
        super(props);
        this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangePwd=this.onChangePwd.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            user_name: '',
            pwd:''
        }
    }
    onChangeUserName(e){
        this.setState({
            user_name:e.target.value,
            
        });
    }
    onChangePwd(e){
        this.setState({
            pwd:e.target.value,
            
        });
    }
    onSubmit(e){

                    e.preventDefault();
                    const obj={
                        user_name:this.state.user_name,
                        pwd:this.state.pwd
                    }
                    console.log(obj);
            const formData = new FormData()
        formData.append("user_name",this.state.user_name)
        formData.append("pwd",this.state.pwd)

axios({
            method: 'get',
            url: 'http://localhost:8282/login/' + this.state.user_name + '=' + this.state.pwd,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then(function (response) {
            if (response.data === SUCCESS_LOGIN) {
               // sessionStorage.setItem('username', user_name);
                window.location.assign("http://localhost:3000/home1")
            } else {
                alert(response.data);
            }
            console.log(response);
        }).catch(function (response) {
            console.log(response)
        });

   /*     axios.post("http://localhost:800/login.php",formData,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        .then(function (response) {
            
            console.log(response);
            if (response.data===1) {
          console.log("hello");
 window.location.assign("http://localhost:3000/home1")
            } else {
               console.log(response);
            }
           
        }).catch(function (response) {
            console.log(response)
        });*/
     }

    render(){
    return(
<form className="content" method="post" onSubmit={this.onSubmit}>
    <div><br/>
        <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" width="150px" heght="150px"/><br/><br/>
    Enter Username <br/><input className="auth"type="text" placeholder="Username" name="un" value={this.state.user_name} onChange={this.onChangeUserName}/>
    <br/><br/>
    Enter Password <br/><input className="auth"type="password" placeholder="Password" name="pw" value={this.state.pwd} onChange={this.onChangePwd}/>
    <br/><br/>
    <input className="sub"type="submit" name="save" value="Login"/>
    <br/><br/>
    <a href="http://localhost:3000/register">Don't have an account? Register here</a>
    </div>
</form>
);
    }
}
export default Login;