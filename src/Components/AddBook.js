import axios from "axios";
import React from "react";
import { NotificationManager } from "react-notifications";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function AddBook(){
    function SaveData(event){
        event.preventDefault();
       
        var newObject = {name:"",author:"",description:"",download_link:"",cost:""};
        newObject.author = event.target.AuthorName.value;
        newObject.name = event.target.BookName.value;
        newObject.description = event.target.Theme.value;
        newObject.download_link = event.target.DownloadLink.value;
        newObject.cost = event.target.marketprice.value;

        
        AddBookToDB(newObject);
        
        //save Object to database
    }

    function AddBookToDB(book){
        axios.post("http://localhost:8080/Book",book)
        .then(res=>{
            console.log(res);
            NotificationManager.success('Data saved succesfully',"",1000);
        })
        .catch(err=>{
            console.log("error occured in saving form data ",err);
            NotificationManager.error("Something went wrong");
            
        })
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
        for="marketprice"
        sm={2}
        >
        Market Price
        </Label>
        <Col sm={10}>
        <Input
            id="marketprice"
            name="marketprice"
            type="text"
        />
        <FormText>
            Enter the market price of this book.
        </FormText>
        </Col>
    </FormGroup>


    <FormGroup row>
        <Label
        for="DownloadLink"
        sm={2}
        >
        Download Link
        </Label>
        <Col sm={10}>
        <Input
            id="DownloadLink"
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