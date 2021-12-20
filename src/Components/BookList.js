import React  from "react";
import { useState ,useEffect} from "react";
import { NotificationContainer } from "react-notifications";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { Container } from "reactstrap";
import BookLayout from "./BookLayout";
import { axiosGetReuqest } from "./Services/AxiosCall";

export default function BookList(){
    const [bookList,setBookList] = useState([]);
    useEffect(()=>{
        FetchData();
    },[]);

    function FetchData(){
        axiosGetReuqest("Books")
        .then(res=>{
            console.log("result here",res);
            update(res.data);
            NotificationManager.success("Book List Fetched successfully","",1000);
        })
        .catch(err=>{
            console.log("error occurred ->",err);
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
            return <BookLayout  props = {element}/>
        })}
           
        </Container>
    <NotificationContainer/>
    </div>
}