import { Table } from "antd";
import React, { useState } from "react";
import Feedback from "./FeedBack";
import TableData from "./Table"


function FeedBackData(){

    const [readersName, setReadersName]= useState("")
    const [authorName, setAuthorName]= useState("")
    const [bookTitle, setBookTitle]= useState("")
    const [comments, setComments]= useState("")
    const [recomendation, setRecomendation]= useState("")
   
    const formData = {
        readersName,
        authorName,
        bookTitle,
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
                readersName: "Rajab Karume",
                authorName:"Charles Dickens",
                bookTitle:"Great Expectations",
                comments:"Read the book it's really awesome",
                recomendation:"Also read 'If tomorrow comes' by Sydney Sheldon"
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