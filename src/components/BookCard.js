import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import Homebanner from './HomeBanner';

const App: React.FC = ({books}) => {
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
    <Homebanner />
    <div style={imageCSS}>
        {books.map((book)=>(
             <>
            <img src={book.image} onClick={showDrawer} />
             <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open} >
               <p>Some contents...</p>
               <p>{book.description}</p>
               <p>Some contents...</p>
             </Drawer>
           </>
        ))}
   
    </div>
    </>
  );
};

export default App;