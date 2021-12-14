import React  from "react";
import { useState ,useEffect} from "react";
import { Container } from "reactstrap";
import BookLayout from "./BookLayout";

export default function BookList(){
    const [bookList,setBookList] = useState([]);
    useEffect(()=>{
        update();
    },[]);

    function update(){
        setBookList(bookList=>[...bookList,
            {id:"1",name:"Girl in room 345",author:"Chetan Bhagat",theme:"Suspense Thriller",cost:340,downloadLink:"https://indianpdf.files.wordpress.com/2021/09/the-girl-in-room-105-chetan-bhagat-www.indianpdf.com_-book-novel-pdf-download-online-free.pdf"},
            {id:"2",name:"I too had a love story",author:"Virendra Singh",theme:"Love Story",cost:290,downloadLink:""},
            {id:"3",name:"An arranged Murder",author:"Chetan Bhagat",theme:"Thriller",cost:255,downloadLink:""}]);
    }
    
   

    return <div>
         
         <Container className=" mb-3">
         <h3 className="text-center temp">Book List</h3>
        {bookList.map((element,index)=>{
            return <BookLayout props = {element}/>
        })}
        
                
        </Container>

    </div>


}