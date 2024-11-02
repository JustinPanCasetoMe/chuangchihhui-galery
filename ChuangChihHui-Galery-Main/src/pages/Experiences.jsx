import React, { useState } from 'react'

const Experiences = ({ exhibition = [], competition = [], archive = [] }) => {

  const catergory_tab_style = "mg-r-20 ${visibleSection === 'exhibition' ? 'bd-bt-active' : '' } pointer"

  const [visibleSection, setVisibleSection] = useState('exhibition');

  const exhibitionRender = exhibition.map((item, index) => {
    return(
      <div key={index} className='df mg-list'>
        <h3 className='mg-r-30'>{item.year}</h3>
        <h3>{item.exhibition}</h3>
      </div>
    )
  })

  const competitionRender = competition.map((item, index) => {
    return(
      <div key={index} className='df mg-list'>
        <h3 className='mg-r-30'>{item.year}</h3>
        <h3>{item.competition}</h3>
      </div>
    )
  })

  const archiveRender = archive.map((item, index) => {
    return(
      <div key={index} className='dib mg-r-20 mg-b-10'>
        <h3>•{item}</h3>
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
          <h2>展歷</h2>
        </li>
        <li
          className={`
            mg-r-20
            ${visibleSection === 'competition' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('competition')}>
          <h2>參賽記事</h2>
        </li>
        <li 
          className={`
            mg-r-20
            ${visibleSection === 'archive' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('archive')}>
          <h2>典藏</h2>
        </li>
      </ul>

      <h3 className='mg-subtitle'>莊志輝 1965 出生於台灣澎湖</h3>

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