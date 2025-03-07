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
        {imgRender(75)}
        {imgRender(76)}
        {imgRender(77)}
        {imgRender(78)}
        {imgRender(79)}
        {imgRender(80)}
        {imgRender(81)}
        {imgRender(82)}
        {imgRender(83)}
        {imgRender(84)}
        {imgRender(85)}
        {imgRender(86)}
        {imgRender(87)}
        {imgRender(88)}
        {imgRender(89)}
        {imgRender(90)}
        {imgRender(91)}
        {imgRender(92)}
        {imgRender(93)}
        {imgRender(94)}
        {imgRender(95)}
        {imgRender(96)}
        {imgRender(97)}
        {imgRender(98)}
      </div>
    </div>
  )
}

export default ModernStereo