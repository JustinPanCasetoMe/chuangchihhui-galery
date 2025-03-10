import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'

const LightSeries = () => {

  const ScreenWidth = window.innerWidth

  const imgRender = (img_Id) => {
    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", marginRight:"50px", position:"relative"}}>
        <Link to={`/portfolio/artworks/${artwork.name}`}>
          <img
            src={artworks[img_Id].thumbnail} alt="" 
            className='bx-sd-sm imgActive'
            style={{width:"100%", height:"100%"}}
          />
          <div className='thumbnailMask'>
            <div className=''>
              <h5 style={{marginBottom:'14.56px'}}>{artwork.name}</h5>
              <h5>{artwork.size} {artwork.mediums} {artwork.year}</h5>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} `}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>燈系列</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(100)}
        {imgRender(43)}
        {imgRender(31)}
        {imgRender(13)}
        {imgRender(102)}
        {imgRender(103)}
      </div>
    </div>
  )
}

export default LightSeries