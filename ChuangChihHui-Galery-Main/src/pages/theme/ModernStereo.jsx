import { Link } from 'react-router-dom'
import thumbnails from '../../datas/thumbnails.json'

const ModernStereo = () => {

  const ScreenWidth = window.innerWidth

  const imgRender = (img_Id) => {
    const thumbnail = thumbnails[img_Id -= 1];
    if (!thumbnail) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", position:"relative"}}>
        <Link to={`/portfolio/artworks/${thumbnail.name}`}>
          <img
            src={thumbnails[img_Id].img} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <h4>{thumbnail.tag}</h4>
            <div className=''>
              <h5 style={{marginBottom:'14.56px'}}>{thumbnail.name}</h5>
              <h5>{thumbnail.size} {thumbnail.mediums} {thumbnail.year}</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} `}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>近代立體</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(25)}
        {imgRender(26)}
        {imgRender(27)}
        {imgRender(28)}
        {imgRender(29)}
        {imgRender(30)}
        {imgRender(31)}
        {imgRender(32)}
        {imgRender(33)}
        {imgRender(34)}
        {imgRender(35)}
        {imgRender(36)}
      </div>
    </div>
  )
}

export default ModernStereo