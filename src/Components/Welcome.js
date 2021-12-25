import React from "react";

export default function Welcome(){
    return <div className="text-center AddingBookContainer">
        <h2> Hello {localStorage.getItem("username")!=null?localStorage.getItem("username"):"Buddy"}</h2>
        <p>Wanna Read som books for Free, You are at a right place.</p>
        <p>Go Ahead, and explore the world of books.</p>
    </div>
}