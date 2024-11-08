import React from 'react'
import { Link } from 'react-router-dom'

const Period_1986_2001 = ({ artworks = [] }) => {


  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    const detailRender = () => {
      return(
        <div className=''>
          <h3>{artwork.name}</h3>
          <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
        </div>
      )
    }

    switch (row){
      case 1:
        return(
          <div className='mg-b-100'>
            <Link to={`/portfolio/artwork_${artwork.name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2 mg-b-50'
                style={{height:'450px'}}
              />
            </Link>
            {detailRender()}
          </div>
        )
      case 2:
        return(
          <div className='mg-b-100'>
            <Link to={`/portfolio/artwork_${artwork.name}`} style={{marginBottom:'300px', }}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2 mg-b-50'
                style={{height:'400px'}}
              />
            </Link>
            {detailRender()}
          </div>
        )
      case 3:
        return(
          <div className='mg-b-100'>
            <Link to={`/portfolio/artwork_${artwork.name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2 mg-b-50'
                style={{height:'350px'}}
              />
            </Link>
            {detailRender()}
          </div>
        )
      case 4:
        return(
          <div className='mg-b-100'>
            <Link to={`/portfolio/artwork_${artwork.name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2 mg-b-50'
                style={{height:'360px'}}
              />
            </Link>
            {detailRender()}
          </div>
        )
      case 5:
        return(
          <div className='mg-b-100'>
            <Link to={`/portfolio/artwork_${artwork.name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2 mg-b-50'
                style={{height:'360px'}}
              />
            </Link>
            {detailRender()}
          </div>
        )
      case 6:
        return(
          <div>
            <Link to={`/portfolio/artwork_${artwork.name}`} style={{marginBottom:'300px'}}>
              <img
                src={artworks[img_Id].img} alt="" 
                className='bx-sd-sm imgActive trans-2 mg-b-50'
                style={{height:'800px'}}
              />
            </Link>
            {detailRender()}
          </div>
        )
    }

    return(
      <>

      </>
    )
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