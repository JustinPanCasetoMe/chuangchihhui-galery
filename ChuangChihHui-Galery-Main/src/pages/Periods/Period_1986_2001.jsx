import React from 'react'
import { Link } from 'react-router-dom'

const Period_1986_2001 = ({ artworks = [] }) => {


  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div className='mg-b-300'>
        <Link to={`/chuangchihhui-galery/portfolio/artworks/${artwork.name}`} style={{marginBottom:'300px'}}>
          <img
            src={artworks[img_Id].img} alt="" 
            className='bx-sd-sm imgActive trans-2 mg-b-50'
            style={{height: 
              row === 1 ? '450px' :
              row === 2 ? '400px' :
              row === 3 ? '320px' :
              row === 4 ? '360px' :
              row === 5 ? '360px' :
              row === 6 ? '800px' : ''
            }}
          />
        </Link>
        <div className=''>
          <h3>{artwork.name}</h3>
          <h3>{artwork.size}{artwork.mediums}{artwork.year}</h3>
        </div>
      </div>
    )
  }

  
  return (

    <>
      <div>
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
      </div>

      <div className='df jc-c mg-b-300'>
        <Link to='//chuangchihhui-galeryportfolio/' className='NavLink trans-2'>
          <h3>歷代經典總覽</h3>
        </Link>
      </div>
    
    </>

  )
}

export default Period_1986_2001