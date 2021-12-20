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
                        <Route  path="/" element={<BookList/>} exact/>
                        <Route  path="/add-book" element={<AddBook/>} exact/>
                        <Route path="/delete-book" element={<DeleteBook/>} exact/>
                        <Route  path="/update-book" element={<UpdateBook/>} exact/>
                    </Routes>
                  
                </Col>
            </Row>         
            </Container>
            <Footer/>
            </Router>
    </div>
}