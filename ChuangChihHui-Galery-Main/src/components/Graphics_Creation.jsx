import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


const Graphics_Creation = ({ graphicLink =[] }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const graphicRender = graphicLink.map((graphicItem, index) => {
    return(
      <div key={index} className='' style={{height:'300px'}}>
        <img src={graphicItem.img} alt="" className='bd-r fh'/>
      </div>
    )
  })

  return (
    <div className='mb-b-box'>
      <Slider {...settings}>
        {graphicRender}
      </Slider>
    </div>
  )
}

export default Graphics_Creation