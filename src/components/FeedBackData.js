import { Table } from "antd";
import React, { useState } from "react";
import Feedback from "./FeedBack";
import TableData from "./Table"


function FeedBackData(){

    const [readersName, setReadersName]= useState("")
    const [authorName, setAuthorName]= useState("")
    const [bookTitle, setBookTitle]= useState("")
    const [thoughts, setThoughts]= useState("")
    const [comments, setComments]= useState("")
    const [recomendation, setRecomendation]= useState("")
   
    const formData = {
        readersName,
        authorName,
        bookTitle,
        thoughts,
        comments,
        recomendation
    }

    function handlechange(e){
        const newInput= (data)=>({...data, [e.target.name]:e.target.value})
        setFeedbackInput(newInput)
    }
    function handleSubmit(e){
        e.preventDefault()
        const checkBlank = !Object.values(feedbackInput).every(res=>res==="")
        if(checkBlank){
            const newData = (data)=>([...data, feedbackInput])
            setTableInfo(newData)
            const emptyInput = {
                readersName: "",
                authorName:"",
                bookTitle:"",
                thoughts: "Liked It",
                comments:"",
                recomendation:""
            }
            setFeedbackInput(emptyInput)
        }
    }
    return(
        <div>
            <Feedback handleSubmit={handleSubmit} handlechange={handlechange} feedbackInput={feedbackInput} setFeedbackInput={setFeedbackInput} />
            <TableData tableInfo={tableInfo} />
        </div>
    )
}

export default FeedBackData;