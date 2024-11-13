import React from 'react'
import critics_item from '../datas/critics.json' 
import { Link } from 'react-router-dom'

const Critics = () => {

  const criticsRender = critics_item.map((critic, index) => {
    return(
      <div key={index} className='mg-b-50' style={{width:'30%', position:'relative'}}>
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
              <h4>{critic.title}</h4>
              <h4>{critic.author}</h4>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <div className='df jc-sb fl-wp'>
      {criticsRender}
    </div>
  )
}

export default Critics