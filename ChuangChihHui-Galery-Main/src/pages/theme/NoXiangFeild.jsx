import { Link } from 'react-router-dom'
import thumbnails from '../../datas/thumbnails.json'

const NoXiangFeild = () => {

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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>無相之境</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(37)}
        {imgRender(38)}
        {imgRender(39)}
        {imgRender(40)}
        {imgRender(41)}
        {imgRender(42)}
        {imgRender(43)}
        {imgRender(44)}
        {imgRender(45)}
        {imgRender(46)}
        {imgRender(47)}
        {imgRender(48)}
      </div>
    </div>
  )
}

export default NoXiangFeild