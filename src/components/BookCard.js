import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Grid } from 'antd';
import React, { useState, useEffect } from 'react';
const { Meta } = Card;

function BookCard(){
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/books")
        .then((responce)=>responce.json())
        .then((data)=>setBooks(data))
    },[])
    console.log(books)
    const arrange = {
        width: "100%",
        maxWidth: "1240px",
        margin: "0 auto",
        paddingTop: "50px",
         
        display: "grid",
         
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridGap: "20px",
    };
    const hStyle = {
        display: 'block',
        fontSize: "7em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold",
        fontWeight: 'bold',
        color: "red",
    }
    return(
        <>
        <h1 style={hStyle}>Let's Read</h1>
        <div style={arrange}>
          
        {books.map((book)=>(
            <Card
            key={book.id}
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src={book.image}
                style={{height:"500px"}}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src={book.image} />}
              title={book.title}
              description={book.description}
            />
          </Card>
      
        ))}
        </div>
        </>
)};

export default BookCard;