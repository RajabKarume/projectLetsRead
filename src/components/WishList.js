import React from "react";
import 'antd/dist/antd.css';
import BookCard from "./BookCard"

export default function WishList({myBooks, setMyBooks, hStyle}){
    console.log(myBooks)
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
      function handleRemove(myBookRemoved){
        const removeArr = myBooks.filter((myBook)=> myBook.id !== myBookRemoved.id)
        setMyBooks(removeArr)
      }
    
    return(
        <>
            <h1 style={hStyle}>Let's read</h1>
            <div style={imageCSS} >
                {myBooks.map((myBook)=>(
                        < BookCard book={myBook} key={myBook.id} handleclick={handleRemove} />
                ))}
            </div>

        </>
    )
}
