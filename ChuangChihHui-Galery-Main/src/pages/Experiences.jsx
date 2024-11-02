import React from 'react'

const Experiences = ( { exhibition = [] } ) => {

  const exhibitionRender = exhibition.map((item, index) => {
    return(
      <div key={index} className='df mg-list'>
        <h3 className='mg-r-30'>{item.year}</h3>
        <h3>{item.exhibition}</h3>
      </div>
    )
  })
  
  return (
    <div>
      <ul className='df title-btm pd-b-title w-auto' style={{width:'240px', marginBottom:'40px'}}>
        <li className='mg-r-20'><h2>展歷</h2></li>
        <li className='mg-r-20'><h2>參賽</h2></li>
        <li className='mg-r-20'><h2>典藏</h2></li>
      </ul>

      <h3 className='mg-subtitle'>莊志輝 1965 出生於台灣澎湖</h3>

      <h3 className='mg-subtitle'>展歷</h3>
      {exhibitionRender}

    </div>
  )
}

export default Experiences