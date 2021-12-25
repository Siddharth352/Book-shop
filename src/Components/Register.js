import React from "react";
import { NotificationManager } from "react-notifications";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { axiosPostRequest } from "./Services/AxiosCall";
import { createUserNewObject } from "./Services/GetObject";

export default function Register(){
    function SaveData(event){
        event.preventDefault();
        var newObject = createUserNewObject(event.target.Username.value,event.target.FirstName.value,event.target.LastName.value,event.target.Age.value,event.target.MobileNo.value,event.target.Password.value,event.target.email.value);
        
        AddUserToDB(newObject);
    }

    function AddUserToDB(user){
        console.log("user",user);
        axiosPostRequest("Register",user)
            .then(res=>{
                console.log(res);
                NotificationManager.success('Data saved succesfully',"",1000);
            })
            .catch(err=>{
                console.log("error occured in saving form data ",err);
                NotificationManager.error("Something went wrong");
            })
    }

    return <div className = "AddingBookContainer" >
     
  
        <Container className="mt-3 mb-3">

    <h2 className="text-center">Register</h2>
        <Form onSubmit={SaveData}>
    <FormGroup row>
        <Label
        for="Username"
        sm={2}
        >
        User Name
        </Label>
        <Col sm={10}>
        <Input
            id="Username"
            name="Username"
            placeholder="Enter your username"
            type="text"
        />
        </Col>    
    </FormGroup>

    <FormGroup row>
        <Label
        for="Password"
        sm={2}
        >
        Password
        </Label>
        <Col sm={10}>
        <Input
            id="Password"
            name="Password"
            type="Password"
        />
        
        </Col>
    </FormGroup>

    <FormGroup row>
        <Label
        for="FirstName"
        sm={2}
        >
        First Name
        </Label>
        <Col sm={10}>
        <Input
            id="FirstName"
            name="FirstName"
            placeholder="Enter your first name"
            type="text"
        />
        </Col>
    </FormGroup>
    
    
    <FormGroup row>
        <Label
        for="LastName"
        sm={2}
        >
        Last Name 
        </Label>
        <Col sm={10}>
        <Input
            id="LastName"
            name="LastName"
            placeholder="Enter your last name"
            type="text"
        />
        </Col>
    </FormGroup>

    <FormGroup row>
        <Label
        for="Age"
        sm={2}
        >
        Age
        </Label>
        <Col sm={10}>
        <Input
            id="Age"
            name="Age"
            type="text"
        />
        <FormText>
            Enter your age in numbers
        </FormText>
        </Col>
    </FormGroup>


    <FormGroup row>
        <Label
        for="MobileNo"
        sm={2}
        >
        Mobile No.
        </Label>
        <Col sm={10}>
        <Input
            id="MobileNo"
            name="MobileNo"
            type="text"
        />
        <FormText>
            please specify your country code
        </FormText>
        </Col>
    </FormGroup>

    <FormGroup row>
        <Label
        for="email"
        sm={2}
        >
        Email
        </Label>
        <Col sm={10}>
        <Input
            id="email"
            name="email"
            type="text"
        />
        </Col>
    </FormGroup>

    

    <Button type="submit"  className="bg-danger mb-1">
    Submit
  </Button>
    </Form>                 
    </Container>
    <NotificationContainer/>        
    </div>
}