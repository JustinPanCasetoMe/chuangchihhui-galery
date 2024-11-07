import React from 'react'
import { Link } from 'react-router-dom'

const Period_1986_2001 = ({ artworks = []}) => {


  const imgRender = (img_Id, row) => {
    switch (row){
      case 1:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artworks[img_Id-=1].name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2'
                style={{height:'450px'}}
              />
            </Link>
            <h3>{artworks[img_Id-=1].name}</h3>
            <h3>{artworks[img_Id-=1].size}{artworks[img_Id-=1].mediums}{artworks[img_Id-=1].year}</h3>
          </div>
        )``
      case 2:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artworks[img_Id-=1].name}`} style={{margin:'0 180px 300px', }}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2'
                style={{height:'400px'}}
              />
            </Link>
            <h3>{artworks[img_Id-=1].name}</h3>
            <h3>{artworks[img_Id-=1].size}{artworks[img_Id-=1].mediums}{artworks[img_Id-=1].year}</h3>
          </div>
        )
      case 3:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artworks[img_Id-=1].name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2'
                style={{height:'350px'}}
              />
            </Link>
            <h3>{artworks[img_Id-=1].name}</h3>
            <h3>{artworks[img_Id-=1].size}{artworks[img_Id-=1].mediums}{artworks[img_Id-=1].year}</h3>
          </div>
        )
      case 4:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artworks[img_Id-=1].name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2'
                style={{height:'360px'}}
              />
            </Link>
            <h3>{artworks[img_Id-=1].name}</h3>
            <h3>{artworks[img_Id-=1].size}{artworks[img_Id-=1].mediums}{artworks[img_Id-=1].year}</h3>
          </div>
        )
      case 5:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artworks[img_Id-=1].name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2'
                style={{height:'360px'}}
              />
            </Link>
            <h3>{artworks[img_Id-=1].name}</h3>
            <h3>{artworks[img_Id-=1].size}{artworks[img_Id-=1].mediums}{artworks[img_Id-=1].year}</h3>
          </div>
        )
      case 6:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artworks[img_Id-=1].name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2'
                style={{height:'800px'}}
              />
            </Link>
            <h3>{artworks[img_Id-=1].name}</h3>
            <h3>{artworks[img_Id-=1].size}{artworks[img_Id-=1].mediums}{artworks[img_Id-=1].year}</h3>
          </div>
        )
    }
  }

  
  return (

    <>
    
    <h2 className='txt-aln-c' style={{marginBottom:'200px'}}>1986-2001</h2>



    <div className='df jc-c'>
      {imgRender(14, 1)}
    </div>
    <div className='df jc-sa'>
      {imgRender(15, 2)}
      {imgRender(16, 2)}
    </div>
    <div className='df jc-sb'>
      {imgRender(17, 3)}
      {imgRender(2, 3)}
      {imgRender(3, 3)}
    </div>
    <div className='df jc-sb'>
      {imgRender(1,4)}
      {imgRender(18,4)}
      {imgRender(19,4)}
      {imgRender(20,4)}
    </div>
    <div className='df jc-sa'>
      {imgRender(21, 5)}
      {imgRender(22, 5)}
      {imgRender(23, 5)}
      {imgRender(24, 5)}
    </div>
    <div className='df jc-c'>
      {imgRender(25, 6)}
    </div>
    </>
  )
}

export default Period_1986_2001