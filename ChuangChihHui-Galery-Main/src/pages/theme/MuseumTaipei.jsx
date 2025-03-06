import { Link } from 'react-router-dom'
import thumbnails from '../../datas/thumbnails.json'

const MuseumTaipei = () => {

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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>北美館時期</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(13)}
        {imgRender(14)}
        {imgRender(15)}
        {imgRender(16)}
        {imgRender(17)}
        {imgRender(18)}
        {imgRender(19)}
        {imgRender(20)}
        {imgRender(21)}
        {imgRender(22)}
        {imgRender(23)}
        {imgRender(24)}
      </div>
    </div>
  )
}

export default MuseumTaipei