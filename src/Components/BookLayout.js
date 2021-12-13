import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default (props)=>{

    function downloadLink(){
        window.open(props.props.downloadLink,"_blank");
    }

    console.log(props);
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
        <CardText>
            <p>Theme : {props.props.theme}</p>
            <p>Price : {props.props.cost}</p>
        </CardText>
        <Button className="bg-danger" onClick={downloadLink}>
            Download
        </Button>
        </CardBody>
    </Card>
    </div>);
}