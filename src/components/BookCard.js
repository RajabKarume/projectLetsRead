import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

const App: React.FC = ({book, id, handleclick}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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

  return (
    <>
    <div style={imageCSS}>
            <img style={{ width: 240 }} src={book.image} onClick={showDrawer} />
            <Button onClick={()=>handleclick(book)}>Add to wish list</Button>
             <Drawer title={book.title} placement="right" onClose={onClose} open={open} >
               <h1>{book.title}</h1>
               <p>{book.description}</p>
               <p>"T"</p>
             </Drawer>
   
    </div>
    </>
  );
};

export default App;