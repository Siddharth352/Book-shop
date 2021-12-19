import axios from "axios";
import React  from "react";
import { useState ,useEffect} from "react";
import { NotificationContainer } from "react-notifications";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { Container } from "reactstrap";
import BookLayout from "./BookLayout";

export default function BookList(){
    const [bookList,setBookList] = useState([]);
    useEffect(()=>{
        // update();
        FetchData();
    },[]);

    function FetchData(){
        axios.get("http://localhost:8080/Books")
        .then(res=>{
            console.log("result from apicall",res);
            update(res.data);
            NotificationManager.success("Book List Fetched successfully","",1000);

        })
        .catch(err=>{
            console.log("error occured ->",err);
            NotificationManager.error("Something went wrong");
        })
    }
    function update(data){

        data.forEach(element => {
            console.log(element);
            setBookList(bookList=>[...bookList,element])
            
        });
            }
    
   

    return <div>
         
         <Container className=" mb-3">
         <h3 className="text-center temp">Book List</h3>
        {bookList.map((element,index)=>{
            return <BookLayout props = {element}/>
        })}
        
                
        </Container>
    <NotificationContainer/>
    </div>


}