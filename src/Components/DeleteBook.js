import React from "react";
import { NotificationContainer } from "react-notifications";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { Input, Label ,Button, Col, Container, Form, FormGroup } from "reactstrap";
import { axiosDeleteRequest } from "./Services/AxiosCall";

function DeleteBook(event){
    event.preventDefault();
    axiosDeleteRequest("DeleteBook",event.target.BookName.value)
    .then(res=>{
        console.log(res);
        NotificationManager.success("Book Deleted succesfully","",1000);
    })
    .catch(err=>{
        console.log(err);
        NotificationManager.error("somthing went wrong");
    })
}

export default function Deletebook(){
    return <div className="AddingBookContainer" >
    <Container className="mt-3 mb-3">

    <h2 className="text-center">Delete Book </h2>
    <Form onSubmit={DeleteBook}>
    <FormGroup row>
        <Label
        for="BookId"
        sm={2}
        >
        Book Unique ID
        </Label>
        <Col sm={10}>
        <Input
            id="BookName"
            name="BookName"
            placeholder="Enter the Unique Id of Book"
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