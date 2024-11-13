import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const Portfolio = ({ artworks = [] }) => {
  
  const ScreenWidth = window.innerWidth

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  const periods = [
    "1986-2001", "2002-2019", "2020-2024", "無相之境"
  ]

  const [ periodId, setPeriodId ] = useState ('');

  const handlePeriod = (p) => {
    setPeriodId(p);
  }

  // Rendering the Img by Artwork Periods
  const artworksRender = ( startTime, endTime, cater ) => {

    return(

      <>
        <div className={`
          df fw jc-sb
          ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
        `}>

          {artworks.map((artwork, index) => {
            if((artwork.classics)){
              if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'40px'}}>
                      <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h3>{artwork.name}</h3>
                      <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                    </div>
                  </div>
                )
              }
              else if((artwork.catergory=="無相之境") && cater ){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'80px'}}>
                      <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h3>{artwork.name}</h3>
                      <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                    </div>
                  </div>
                )
              }
            }
            return null;
          })}

        </div>

        <div className={`
          df fw jc-sb
          ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}  
        `}>

          {artworks.map((artwork, index) => {
            if((artwork.classics)){
              if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'40px'}}>
                      <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h3>{artwork.name}</h3>
                      <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                    </div>
                  </div>
                )
              }
              else if((artwork.catergory=="無相之境") && cater ){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'80px'}}>
                      <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h3>{artwork.name}</h3>
                      <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                    </div>
                  </div>
                )
              }
            }
            return null;
          })}

        </div>

        <div className={`
          df fw jc-sb
          ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}  
        `}>

          {artworks.map((artwork, index) => {
            if((artwork.classics)){
              if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'40px'}}>
                      <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h3>{artwork.name}</h3>
                      <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                    </div>
                  </div>
                )
              }
              else if((artwork.catergory=="無相之境") && cater ){
                return(
                  <div key={index}>
                    <div style={{height:'400px',marginBottom:'80px'}}>
                      <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                        <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                      </Link>
                    </div>
                    <div className=''>
                      <h3>{artwork.name}</h3>
                      <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                    </div>
                  </div>
                )
              }
            }
            return null;
          })}

        </div>

        <div className={`
          df fw jc-sb
          ${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}  
        `}>

          <Slider {...settings}>

            {artworks.map((artwork, index) => {
              if((artwork.classics)){
                if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
                  return(
                    <div key={index}>
                      <div style={{height:'400px',marginBottom:'40px'}}>
                        <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                          <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                        </Link>
                      </div>
                      <div className=''>
                        <h3>{artwork.name}</h3>
                        <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                      </div>
                    </div>
                  )
                }
                else if((artwork.catergory=="無相之境") && cater ){
                  return(
                    <div key={index}>
                      <div style={{height:'400px',marginBottom:'80px'}}>
                        <Link to={`chuangchihhui-galery/portfolio/artworks/${artwork.name}`}>
                          <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                        </Link>
                      </div>
                      <div className=''>
                        <h3>{artwork.name}</h3>
                        <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                      </div>
                    </div>
                  )
                }
              }
              return null;
            })}
          </Slider>



        </div>
      
      
      </>

      
    )
  }

  return (
    <div>
      <h2 className='mg-b-30'>歷代平面經典總覽</h2>

      {/* 1986-2001 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`chuangchihhui-galery/portfolio/periods/${periods[0]}`} onClick={() => handlePeriod(periods[0])}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[0]}</h3>
        </Link>
        {artworksRender(1986, 2001, false)}
      </div>

      {/* 2002-2019 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`chuangchihhui-galery/portfolio/periods/${periods[1]}`} onClick={() => handlePeriod(periods[1])}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[1]}</h3>
        </Link>
        {artworksRender(2002, 2019, false)}
      </div>

      {/* 2020-2024 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`chuangchihhui-galery/portfolio/periods/${periods[2]}`} onClick={() => handlePeriod(periods[2])}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[2]}</h3>
        </Link>
        {artworksRender(2020, 2024, false)}
      </div>

      {/* 無相之境 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`chuangchihhui-galery/portfolio/periods/${periods[3]}`} onClick={() => handlePeriod(periods[3])}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[3]}</h3>
        </Link>
        {artworksRender(0, 0, true)}
      </div>
    </div>
  )
}

export default Portfolio