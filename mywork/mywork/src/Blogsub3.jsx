import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import old5 from './old5.jpg';
import old6 from './old6.jpg';
import old7 from './old7.jpg';
import Bloginfo3 from './Bloginfo3';



const Blogsub3 = () => {
  return (
    <div>
      <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={old5}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
       src={old6}

      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={old7}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Bloginfo3/>


    </div>
    
    </div>
    
  )
}

export default Blogsub3
