
import React from "react";
import {
    Container,
    Form,Label,Col,Input,FormText,FormGroup,Button
} from "reactstrap";
import Home from "./Home";
import { axiosPostRequest } from "./Services/AxiosCall";
export default function Login() {

    function validateUser(event){
        event.preventDefault();
        axiosPostRequest("Login",{username:event.target.username.value,password:event.target.Password.value})
        .then(res=>{
            localStorage.setItem("username" , res.data.userName);
            localStorage.setItem("firstName" , res.data.firstName);  
            window.location.replace("/");
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return <div>
        {localStorage.getItem("username")!=null?<Home/>:
        <div className = "AddingBookContainer">
            <Container className = "mt-3 mb-3" >

        <h2 className = "text-center" > Login </h2> 
        <Form onSubmit={validateUser}>
        <FormGroup row >
        <Label
    for = "username"
    sm = {
            2
        } >
        Username </Label> 
        <Col sm = {
            10
        } >
        <Input
    id = "username"
    name = "username"
    placeholder = "Enter the name of user"
    type = "text" /
        >
        </Col> 
        </FormGroup> 
        <FormGroup row >
        <Label
    for = "Password"
    sm = {
            2
        } >
        Password </Label> 
        <Col sm = {
            10
        } >
        <Input
    id = "Password"
    name = "Password"
    placeholder = "Enter the Password"
    type = "password" /
        >
        </Col> 
        </FormGroup>


        <Button type = "submit"
    className = "bg-danger mb-1" >
        Submit 
        </Button> 
        </Form> 

        <p className="mt-4">New User??... Register here</p>   
                    
        </Container></div>
        }
    


    </div>
   
}