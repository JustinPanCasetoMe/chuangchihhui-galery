import React from 'react'
import { Link } from 'react-router-dom'

const Period_2020_2024 = ({ artworks = [] }) => {


  const imgRender = (img_Id, row) => {

    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div 
        className={`mg-b-300`}
        style={{marginBottom:'180px'}}
      >
        <Link to={`/portfolio/artwork_${artwork.name}`} className={{}}>
          <img
            src={artwork.img} alt={artwork.name} 
            className='bx-sd-sm imgActive trans-2 mg-b-50'
            style={{
              height: 
              row === 1 ? '' :
              row === 2 ? '' :
              row === 3 ? '480px' :
              row === 4 ? '450px' :
              row === 5 ? '480px' :
              row === 6 ? '480px' :
              row === 7 ? '800px' : '',

              width:
              row === 1 ? '100%' : 
              row === 2 ? '100%' : ''

            }
          }
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
      <div className=''>
        <h2 className='txt-aln-c' style={{marginBottom:'200px'}}>2020-2024</h2>

        <div className='df jc-c'>
          {imgRender(38, 1)}
        </div>
        <div className='df jc-c'>
          {imgRender(39, 2)}
        </div>
        <div className='df jc-sb'>
          {imgRender(7, 3)}
          {imgRender(40, 3)}
        </div>
        <div className='df jc-c'>
          {imgRender(41,4)}
        </div>
        <div className='df jc-sb'>
          {imgRender(42, 5)}
          {imgRender(43, 5)}
        </div>
        <div className='df jc-sb'>
          {imgRender(8, 6)}
          {imgRender(44, 6)}
        </div>
        <div className='df jc-c'>
          {imgRender(45, 7)}
        </div>
      </div>

      <div className='df jc-c mg-b-300'>
        <Link to='/portfolio/' className='NavLink trans-2'>
          <h3>歷代經典總覽</h3>
        </Link>
      </div>
    
    </>

  )
}

export default Period_2020_2024