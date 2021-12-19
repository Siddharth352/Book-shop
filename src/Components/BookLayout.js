import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default (props)=>{

    function downloadLink(){
        console.log("clicked and doenload link is ",props);
        window.open(props.props.download_link,"_blank");
    }

    console.log("Inside here ",props);
    return(
        <div className="text-center ">
    <Card className="cardLayout"
        body
        outline
    >
        <CardBody>
        <CardTitle tag="h5">
           {props.props.name}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            By {props.props.author}
        </CardSubtitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            ID : {props.props.id}
        </CardSubtitle>
        <CardText>
            <p>Theme : {props.props.description}</p>
            <p>Price : {props.props.cost}</p>
        </CardText>
        <Button className="bg-danger" onClick={downloadLink}>
            Download
        </Button>
        </CardBody>
    </Card>
    </div>);
}