import React from "react";
import 'antd/dist/antd.css';
import Homebanner from "./HomeBanner";
import { useState, useEffect } from 'react';
import BookCard from "./BookCard"

export default function BookHome({books}){
    const imageCSS = {
        width: "100%",
        maxWidth: "1240px",
        margin: "0 auto",
        paddingTop: "50px",
         
        display: "grid",
         
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridGap: "20px",
      }

    
    return(
        <>
            <h1>Let's read</h1>
            <div style={imageCSS} >
                {books.map((book)=>(
                        < BookCard title={book.tittle} key={book.id} image={book.image} description={book.description} id={book.id} author={book.authors} />
                ))}
            </div>

        </>
    )
}
