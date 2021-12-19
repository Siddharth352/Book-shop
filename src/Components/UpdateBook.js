import axios from "axios";
import React from "react";
import { NotificationContainer } from "react-notifications";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";



export default function UpdateBook(){


    function UpdateData(event){
        event.preventDefault();
        var newObject = {id:"",name:"",author:"",description:"",download_link:"",cost:""};
        newObject.author = event.target.AuthorName.value;
        newObject.name = event.target.BookName.value;
        newObject.description = event.target.Theme.value;
        newObject.download_link = event.target.DownloadLink.value;
        newObject.cost = event.target.marketprice.value;
        newObject.id = event.target.BookId.value;


        axios.put("http://localhost:8080/UpdateBook",newObject)
        .then(res=>{
            console.log(res);
            NotificationManager.success("Book updated successfully","",1000);
        })
        .catch(err=>{
            console.log(err);
            NotificationManager.error("Something went wrong");
        })
       
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
        for="marketprice"
        sm={2}
        >
        Market Price
        </Label>
        <Col sm={10}>
        <Input
            id="marketprice"
            name="marketprice"
            placeholder="Enter the Market price of this book"
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
    <NotificationContainer/>
    </div>

}