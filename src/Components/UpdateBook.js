import React from "react";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";



export default function UpdateBook(){


    function UpdateData(event){
        event.preventDefault();
        console.log("make Request to update the book data");
    }

    return <div className="AddingBookContainer">
    <Container className="mt-3 mb-3">

    <h2 className="text-center">Update Book </h2>
        <Form onSubmit={UpdateData}>
    <FormGroup row>
        <Label
            for ="BookId"
            sm={2}
            >
                Book Unique Id
            </Label>
        <Col sm={10}>
            <Input
             id="BookId"
             name="BookId"
             placeholder="Enter the Unique Id of Book"
             type="text"
         />
        </Col>        
        </FormGroup>        
    <FormGroup row>
        <Label
        for="BookName"
        sm={2}
        >
        Book Name
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
    <FormGroup row>
        <Label
        for="AuthorName"
        sm={2}
        >
        Author Name
        </Label>
        <Col sm={10}>
        <Input
            id="AuthorName"
            name="AuthorName"
            placeholder="Enter the name of author"
            type="text"
        />
        </Col>
    </FormGroup>


    <FormGroup row>
        <Label
        for="Theme"
        sm={2}
        >
        Theme 
        </Label>
        <Col sm={10}>
        <Input
            id="Theme"
            name="Theme"
            placeholder="for eg. Suspense, Thriller, Romantic etc."
            type="text"
        />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label
        for="DownloadLink"
        sm={2}
        >
        Downlaod Link
        </Label>
        <Col sm={10}>
        <Input
            id="DownlaodLink"
            name="DownloadLink"
            type="text"
        />
        <FormText>
            Here you can enter a website link which have this book pdf or you can enter any drive link which contain this book.
        </FormText>
        </Col>
    </FormGroup>
    <Button type="submit"  className="bg-danger mb-1">
    Submit
    </Button>
    </Form>                 
    </Container>
    </div>

}