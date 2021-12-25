import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import BookList from "./BookList";
import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";
import { Col, Container, Row } from "reactstrap";
import Menus from "./Menus";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register"
import Welcome from "./Welcome";

export default()=>{
    return <div className="home">
            <Router>
            <Header/>
            <Container>
            <Row>
                 <Col md={4}>
                     <Menus/>
                </Col>
                <Col md={8}>
                    <Routes>
                        <Route  path="/BookList" element={<BookList/>} exact/>
                        <Route  path="/add-book" element={<AddBook/>} exact/>
                        <Route path="/delete-book" element={<DeleteBook/>} exact/>
                        <Route  path="/update-book" element={<UpdateBook/>} exact/>
                        <Route  path="/logout" element={<Logout/>} exact/>
                        <Route  path="/Login" element={<Login/>} exact/>
                        <Route  path="/Register" element={<Register/>} exact/>
                        <Route path="/" element={<Welcome/>}/>
                    </Routes>
                  
                </Col>

                
            </Row>         
            </Container>
            <Footer/>
            </Router>
    </div>
}