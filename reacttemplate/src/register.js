import React from "react";
import axios from "axios";
import "./login.css"

const SUCCESS_REGISTER = "Registered";

class Register extends React.Component{
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

        axios.post("http://localhost:800/register.php",formData,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        .then(function (response) {
            
            console.log(response);
            if (response.data === "Inserted") {
          console.log("hello");
 window.location.assign("http://localhost:3000/login")
            } else {
               
            }
           
        }).catch(function (response) {
            console.log(response)
        });
     }

    render(){
    return(
<form className="content" method="post" onSubmit={this.onSubmit}>
    <div>
    Enter Username <br/><input className="auth"type="text" name="un" value={this.state.user_name} onChange={this.onChangeUserName}/>
    <br/><br/>
    Enter Password <br/><input className="auth"type="password" name="pw" value={this.state.pwd} onChange={this.onChangePwd}/>

    <br/><br/>
    Confirm Password <br/><input className="auth"type="password"/>
    <br/><br/>
    <input className="subb"type="submit" name="save" value="Register"/>
    <br/><br/>
    <img width="180px" height="180px" src="data:image/png;base64,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"/>
    </div>
</form>
);
    }
}
export default Register;