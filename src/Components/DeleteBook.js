import React from "react";
import { Input, Label ,Button, Col, Container, Form, FormGroup } from "reactstrap";

function DeleteBook(event){
    event.preventDefault();
    console.log("make Request for Delete this book");
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
            placeholder="Enter the name of Book"
            type="text"
        />
        </Col>
    </FormGroup>

    <Button type="submit"  className="bg-danger mb-1">
    Submit
    </Button>
    </Form>                 
</Container>
</div>
}