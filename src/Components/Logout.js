import React from "react";
import { Button, Container } from "reactstrap";

export default function Logout(){

    function clearData(){
        localStorage.removeItem("firstName");
        localStorage.removeItem("username");
        window.location.replace("/");
    }
    return <div>
        {localStorage.getItem===null?null:<div>

        <Container className="text-center">
            <h4>Hey {localStorage.getItem("firstName")},</h4>
            <p>
                Feel bad to know, you are going... <br></br>Hope we will meet soon 😃. 
            </p>
            <Button className="bg-danger" onClick={clearData}>  Logout </Button>

        </Container>

    </div>}

    </div>
}