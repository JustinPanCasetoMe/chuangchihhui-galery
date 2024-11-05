import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = ({ artworks = [] }) => {

  const periods = [
    "1986-2001", "2002-2019", "2020-2024", "無相之境"
  ]

  const artworksRender = ( startTime, endTime, cater ) => {

    return(

      <div className='df fw jc-sb'>


        {artworks.map((artwork, index) => {
          if((artwork.classics)){
            if((artwork.year >= startTime && artwork.year < endTime) && (!cater) && (artwork.catergory!="無相之境")){
              return(
                <div key={index}>
                  <div style={{height:'400px',marginBottom:'80px'}}>
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
            }
            else if((artwork.catergory=="無相之境") && cater ){
              return(
                <div key={index}>
                  <div style={{height:'400px',marginBottom:'80px'}}>
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
            }
          }
          return null;
        })}

      </div>
      
    )
  }

  return (
    <div>
      <h2 className='mg-b-30'>歷代平面經典總覽</h2>

      {/* 1986-2001 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`/portfolio/${periods[0]}`}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[0]}</h3>
        </Link>
        {artworksRender(1986, 2001, false)}
      </div>

      {/* 2002-2019 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`/portfolio/${periods[1]}`}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[1]}</h3>
        </Link>
        {artworksRender(2001,2019, false)}
      </div>

      {/* 2020-2024 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`/portfolio/${periods[2]}`}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[2]}</h3>
        </Link>
        {artworksRender(2020, 2024, false)}
      </div>

      {/* 無相之境 */}
      <div style={{marginBottom:'200px'}}>
        <Link to={`/portfolio/${periods[2]}`}>
          <h3 className='mg-b-30 fw-b clr-black'>{periods[3]}</h3>
        </Link>
        {artworksRender(0, 0, true)}
      </div>
    </div>
  )
}

export default Portfolio