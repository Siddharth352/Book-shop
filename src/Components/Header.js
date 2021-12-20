import React from "react";
import { Container } from "react-bootstrap";
function header(){
    return <div  className="bg-warning" >
            <Container>
                <div className="text-center" >
                    <h1 className="Header Header-heading">Book Shop</h1>
                </div>
                <div className="text-center">
                    <p className="Header Header-text"> Hello Users, Welcome to Book Shop. Its a open libraby where you can get any book you want for free and you can also contribute to this Website and can fellow users.</p>
                </div>
            </Container>
        </div>
}
export default header;