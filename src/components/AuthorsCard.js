import { Card } from 'antd';
import React from 'react';
import Homebanner from './HomeBanner';

const { Meta } = Card;
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

const AuthorsCard: React.FC = ({books}) =>(
    
    <>
    < Homebanner />
    <div style={arrange}>
    {books.map((book)=>(
         <Card
         key={book.id}
         hoverable
         style={{ width: 240 }}
         cover={<img alt={book.authors.name} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
     >
         <Meta title={book.authors.name} description={book.authors.birt_year}/>
     </Card>
    ))}
    </div>
  </>
);

export default AuthorsCard;