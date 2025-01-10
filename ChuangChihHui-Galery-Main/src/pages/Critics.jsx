import React, { useState, useParams } from 'react'
import critics_item from '../datas/critics.json' 
import { Link } from 'react-router-dom'

const Critics = () => {

  // const {CriticsItem} = useParams

  const ScreenWidth = window.innerWidth

  const [visibleSection, setVisibleSection] = useState('critics');

  const handleSectionToggle = (section) =>{
    setVisibleSection(visibleSection === section ? null : section)
  }

  const criticsRender = critics_item.map((critic, index) => {
    return(
      <>
        <div
          className={`mg-b-50 ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  `}
          style={{width:'31%', position:'relative'}}
        >
          <div key={index} style={{width:'100%'}}>
            <Link to={`/critics/${critic.id}`}>
              <div>
                <div className='fw' style={{position:'relative'}}>
                  <img src={critic.bg} alt="" className='' style={{width:'100%'}}/>
                  <div className="msk"> </div>
                </div>
                <div
                  className='fw df jc-sb pd-10'
                  style={{position:'absolute', bottom:'0', left:'0', color:'#fff'}}
                >
                  <h5>{critic.title}</h5>
                  <h5>{critic.author}</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`mg-b-50 ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}  `}
          style={{width:'31%', position:'relative'}}
        >
          <div key={index} style={{width:'100%'}}>
            <Link to={`/critics/${critic.id}`}>
              <div>
                <div className='fw' style={{position:'relative'}}>
                  <img src={critic.bg} alt="" className='fw'/>
                  <div className="msk"> </div>
                </div>
                <div
                  className='fw df jc-sb pd-10'
                  style={{position:'absolute', bottom:'0', left:'0', color:'#fff'}}
                >
                  <h5>{critic.title}</h5>
                  <h5>{critic.author}</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`mg-b-50 ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}  `}
          style={{width:'45%', position:'relative'}}>
          <div key={index} style={{width:'100%'}}>
            <Link to={`/critics/${critic.id}`}>
              <div>
                <div className='fw' style={{position:'relative'}}>
                  <img src={critic.bg} alt="" className='fw'/>
                  <div className="msk"> </div>
                </div>
                <div
                  className='fw df jc-sb pd-10'
                  style={{position:'absolute', bottom:'0', left:'0', color:'#fff'}}
                >
                  <h5>{critic.title}</h5>
                  <h5>{critic.author}</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`mg-b-50 ${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}  `}
          style={{width:'100%', position:'relative'}}
        >
          <div key={index} style={{width:'100%'}}>
            <Link to={`/critics/${critic.id}`}>
              <div>
                <div className='fw' style={{position:'relative'}}>
                  <img src={critic.bg} alt="" className='fw'/>
                  <div className="msk"> </div>
                </div>
                <div
                  className='fw df jc-sb pd-10'
                  style={{position:'absolute', bottom:'0', left:'0', color:'#fff'}}
                >
                  <h5>{critic.title}</h5>
                  <h5>{critic.author}</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>
      
    )
  })

  return (

    <div>
      <ul className='df pd-b-title mg-b-10 w-auto'>
        <li 
          className={`
            mg-r-20
            ${visibleSection === 'critics' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('critics')}>
          <h5 style={{fontWeight:'900'}}>藝評</h5>
        </li>
        <li
          className={`
            mg-r-20
            ${visibleSection === 'report' ? 'bd-bt-active' : '' }
            pointer trans-4
          `}
          onClick={() => handleSectionToggle('report')}>
          <h5 style={{fontWeight:'900'}}>報導</h5>
        </li>
      </ul>

      {visibleSection === 'critics' && (
        <div className={`
          ${(1024<=ScreenWidth && ScreenWidth < 1960) ? 'df jc-sb fl-wp' : ''}
          ${(768<=ScreenWidth && ScreenWidth < 1024) ? 'df jc-sb fl-wp' : ''}
          ${(425<=ScreenWidth && ScreenWidth < 768) ? 'df jc-sb fl-wp' : ''}
          ${(375<=ScreenWidth && ScreenWidth < 425) ? 'df fd-c' : ''}
        `}>
          {criticsRender}
        </div>
      )}

      {visibleSection === 'report' && (
          <div className={`
            df jc-sb fl-wp
            ${(375<=ScreenWidth && ScreenWidth < 425) ? 'fd-c' : ''}
          `}>
            {/* {criticsRender} */}
          </div>
      )}


    </div>

  )
}

export default Critics