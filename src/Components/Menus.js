import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

export default function Menu(){
    
    return <div>

        <ListGroup >
            <Link  className="list-group-item list-group-item-action" tag="a" to="/" action>
                BookList
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-book" action>
                AddBook
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/delete-book" action>
                DeleteBook 
            </Link>
            <Link  className="list-group-item list-group-item-action"tag="a" to="/update-book" action>
                UpdateBook
            </Link>
        </ListGroup>

    </div>
}