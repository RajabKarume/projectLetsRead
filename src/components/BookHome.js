import React from "react";
import 'antd/dist/antd.min.css';
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
            <p style={{fontFamily: 'Lucida Console, Times New Roman, Arial, Lucida Handwriting',fontStyle:'italic',fontSize: '30px',}}>Ever had one of those days where the weather outside is beautiful and sunny; but you would rather be inside on the seat right by the window, with a comical and dramatic book showing girl power at it’s best on one hand, and a cup of sweet cocoa on the other? Or maybe, a quiet night in with you thinking to yourself, this would be the perfect time to master the art of psychological warfare since everyday is a battle and you can never be too prepared, but have no idea where to begin. Or better yet, planning for a long journey, certain that your loved one will be asleep all through leaving you with nothing better to do, and positive that you have combed through every action thriller novel there is to read. Well, if you’re reading this, then you’re about to read some more. Let’s Read has got you covered with tones of book titles and more, from every genre imaginable, and century you wish to get in touch with. You no longer have to waste time trying to think of all the ways to tell google the kind of reading experience you need that day and have the same old titles thrown at you. With let’s read, you can create your own reading algorithm, find updated book titles, know more about the authors, add books to your read list, and give feedback on your experience both of the books and the website. Go crazy reading it all; your experience just might be another reading adventure for the rest of us book lovers!!!   </p>
            <div style={imageCSS} >
                {books.map((book)=>(
                        < BookCard book={book} key={book.id} handleclick={handleclick} id={book.id}/>
                ))}
            </div>

        </>
    )
}
