import React from "react";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function AddBook(){
    function SaveData(event){
        event.preventDefault();
        var newObject = {bookName:"",author:"",theme:"",downlaodLink:""};
        newObject.author = event.target.AuthorName.value;
        newObject.bookName = event.target.BookName.value;
        newObject.theme = event.target.Theme.value;
        newObject.downlaodLink = event.target.DownlaodLink.value

        console.log(newObject);
        //save Object to database
    }

    return <div className="AddingBookContainer">
        <Container className="mt-3 mb-3">

    <h2 className="text-center">Add Book </h2>
        <Form onSubmit={SaveData}>
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