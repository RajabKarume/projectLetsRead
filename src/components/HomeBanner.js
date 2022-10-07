import { Carousel, Image } from 'antd';
import React from 'react';
const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Homebanner = () => (
  <Carousel autoplay>
    <div>
      <h3  style={contentStyle}>
        <Image src="https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWRpbmclMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src="https://images.unsplash.com/photo-1522008342704-6b265b543c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVhZGluZyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" /></h3>
    </div>
  </Carousel>
);

export default Homebanner;