import React, { useState } from 'react'

const Experiences = ({ exhibition = [], competition = [], archive = [] }) => {

  const [visibleSection, setVisibleSection] = useState('exhibition');

  const exhibitionRender = exhibition.map((item, index) => {
    return(
      <div key={index} className='df mg-list' style={{color:'var(--content-grey)'}}>
        <h4 className='fw-b' style={{width:'80px'}}>{item.year}</h4>
        <h4>{item.exhibition}</h4>
      </div>
    )
  })

  const competitionRender = competition.map((item, index) => {
    return(
      <div key={index} className='df mg-list' style={{color:'var(--content-grey)'}}>
        <h4 className='' style={{width:'80px'}}>{item.year}</h4>
        <h4>{item.competition}</h4>
      </div>
    )
  })

  const archiveRender = archive.map((item, index) => {
    return(
      <div key={index} className='dib mg-r-20 mg-b-10' style={{color:'var(--content-grey)'}}>
        <h4>{item}</h4>
      </div>
    )
  })

  const handleSectionToggle = (section) =>{
    setVisibleSection(visibleSection === section ? null : section)
  }
  
  return (
    <div>
      <ul className='df pd-b-title mg-b-10 w-auto'>
        <li 
          className={`
            mg-r-20
            ${visibleSection === 'exhibition' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('exhibition')}>
          <h4 style={{fontWeight:'900'}}>展歷</h4>
        </li>
        <li
          className={`
            mg-r-20
            ${visibleSection === 'competition' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('competition')}>
          <h4 style={{fontWeight:'900'}}>參賽記事</h4>
        </li>
        <li 
          className={`
            mg-r-20
            ${visibleSection === 'archive' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('archive')}>
          <h4 style={{fontWeight:'900'}}>典藏</h4>
        </li>
      </ul>

      <h4 className='mg-subtitle'>莊志輝 1965 出生於台灣澎湖</h4>

      {/* Exhiition Record */}
      {visibleSection === 'exhibition' && (
        <>
          {/* <h3 className='catergory'>展歷</h3> */}
          {exhibitionRender}
        </>
      )}

      {/* Competition Record */}
      {visibleSection === 'competition' && (
        <>
          {/* <h3 className='catergory'>參賽</h3> */}
          {competitionRender}
        </>
      )}

      {/* Archive */}
      {visibleSection === 'archive' && (
        <>
          {/* <h3 className='catergory'>典藏</h3> */}
          {archiveRender}
        </>
      )}

    </div>
  )
}

export default Experiences