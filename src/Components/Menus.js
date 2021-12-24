import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
export default function Menu(){
    return <div>
        <ListGroup >
            {localStorage.getItem("username")!=null?<Link  className="list-group-item list-group-item-action" tag="a" to="/BookList" action>
                BookList
            </Link>:null}
            {localStorage.getItem("username")!=null?<Link className="list-group-item list-group-item-action" tag="a" to="/add-book" action>
                AddBook
            </Link>:null}
            {localStorage.getItem("username")!=null?<Link className="list-group-item list-group-item-action" tag="a" to="/delete-book" action>
                DeleteBook 
            </Link>:null}
            {localStorage.getItem("username")!=null?<Link  className="list-group-item list-group-item-action"tag="a" to="/update-book" action>
                UpdateBook
            </Link>:null}
            {localStorage.getItem("username")!=null?<Link  className="list-group-item list-group-item-action"tag="a" to="/logout" action>
                Logout
            </Link>:null}

            {localStorage.getItem("username")===null?<Link  className="list-group-item list-group-item-action"tag="a" to="/Login" action>
                Login
            </Link>:null}
            {localStorage.getItem("username")===null?<Link  className="list-group-item list-group-item-action"tag="a" to="/Register" action>
                Register
            </Link>:null}
        </ListGroup>
    </div>
}