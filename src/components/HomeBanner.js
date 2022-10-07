import { Carousel, Image } from 'antd';
import image1 from '/home/rajab/development/Code/Phase2/Final Project/my-app/src/src/Images/elisa-calvet-b-S3nUOqDmUvc-unsplash.jpg';
import image2 from '/home/rajab/development/Code/Phase2/Final Project/my-app/src/src/Images/fabiola-penalba--kl_XvEOqMU-unsplash.jpg';
import image3 from '/home/rajab/development/Code/Phase2/Final Project/my-app/src/src/Images/fallon-michael-qmlGWIaIgpo-unsplash.jpg';
import image4 from '/home/rajab/development/Code/Phase2/Final Project/my-app/src/src/Images/natalie-grainger-Mw1efRU1qcU-unsplash.jpg';
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
        <Image src={image1}/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src={image2}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src={image3}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><Image src={image4}/></h3>
    </div>
  </Carousel>
);

export default Homebanner;