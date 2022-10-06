import React from "react";
import 'antd/dist/antd.css';
import BookCard from "./BookCard"

export default function BookHome({books, setBooks, handleclick, hStyle}){
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
            <h1 className="h1" style={hStyle}>Let's read</h1>
            <div style={imageCSS} >
                {books.map((book)=>(
                        < BookCard book={book} key={book.id} handleclick={handleclick} id={book.id}/>
                ))}
            </div>

        </>
    )
}
