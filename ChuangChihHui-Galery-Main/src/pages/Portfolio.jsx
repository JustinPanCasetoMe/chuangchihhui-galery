import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = ({ artworks = [] }, mainArtwork) => {

  const artworksRender = ( startTime, endTime ) => {
    return(
      <div className='df fw jc-sb of-x-scl'>
        {artworks.map((artwork, index) => {
          if(artwork.year >= startTime && artwork.year <= endTime){
            return(
              <div>
                <div key={index} style={{height:'480px',marginBottom:'80px'}}>
                  <Link to={`/portfolio/artwork_${artwork.name}`}>
                    <img src={artwork.img} alt="" className='fh bd-r-sm bx-sd-sm'/>
                  </Link>
                </div>
                <div className=''>
                  <h3>{artwork.name}</h3>
                  <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
                </div>
              </div>
            )
            return null;
          }
        })}
      </div>
      
    )
  }

  return (
    <div>
      <h2 className='mg-b-30'>歷代平面經典總覽</h2>
      <div style={{marginBottom:'200px'}}>
        <h3 className='mg-b-30 fw-b clr-black'>1986-2001</h3>
        {artworksRender(1986, 2001)}
      </div>
      <div style={{marginBottom:'200px'}}>
        <h3 className='mg-b-30 fw-b clr-black'>2001-2019</h3>
        {artworksRender(2002, 2019)}
      </div>
      <div style={{marginBottom:'200px'}}>
        <h3 className='mg-b-30 fw-b clr-black'>2020-2024</h3>
        {artworksRender(2020, 2024)}
      </div>
    </div>
  )
}

export default Portfolio