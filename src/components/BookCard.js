import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import Homebanner from './HomeBanner';

const App: React.FC = ({book, title, image, description, id, author}) => {
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
            <img style={{ width: 240 }} src={image} onClick={showDrawer} />
            <Button>Add to wish list</Button>
             <Drawer title={title} placement="right" onClose={onClose} open={open} >
               <h1>{title}</h1>
               <p>{description}</p>
               <p>{author.name}</p>
             </Drawer>
   
    </div>
    </>
  );
};

export default App;