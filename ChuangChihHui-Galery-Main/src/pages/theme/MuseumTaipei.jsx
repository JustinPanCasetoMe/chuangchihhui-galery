import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'

const MuseumTaipei = () => {

  const ScreenWidth = window.innerWidth

  const imgRender = (img_Id) => {
    const artwork = artworks[img_Id -= 1];
    if (!artwork) return null;

    return(
      <div style={{width:"22%", marginBottom:"100px", position:"relative"}}>
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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>北美館時期</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(2)}
        {imgRender(74)}
        {imgRender(75)}
        {imgRender(73)}
        {imgRender(77)}
        {imgRender(76)}
        {imgRender(71)}
        {imgRender(20)}
        {imgRender(16)}
        {imgRender(20)}
        {imgRender(15)}
        {imgRender(18)}
      </div>
    </div>
  )
}

export default MuseumTaipei