import React from "react";
import { NotificationContainer } from "react-notifications";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { axiosPutReuqest } from "./Services/AxiosCall";
import { createNewObject } from "./Services/GetObject";

export default function UpdateBook(){
    function UpdateData(event){
        event.preventDefault();
        var newObject = createNewObject(event.target.AuthorName.value,event.target.BookName.value,event.target.Theme.value,event.target.DownloadLink.value,event.target.marketprice.value,event.target.BookId.value);
        axiosPutReuqest("UpdateBook",newObject)
        .then(res=>{
            console.log(res);
            NotificationManager.success("Book updated successfully","",1000);
        })
        .catch(err=>{
            console.log(err);
            NotificationManager.error("Something went wrong");
        })
    }
    return <div>
        {localStorage.getItem("username")===null?null:
    
    <div className="AddingBookContainer">
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
    </div>
}