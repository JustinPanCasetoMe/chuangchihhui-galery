import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'

const EarlyStereo = () => {

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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>早期立體</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(143)}
        {imgRender(144)}
        {imgRender(145)}
        {imgRender(146)}
        {imgRender(147)}
        {imgRender(148)}
        {imgRender(149)}
        {imgRender(150)}
        {imgRender(151)}
        {imgRender(152)}
        {imgRender(153)}
        {imgRender(154)}
        {imgRender(155)}
        {imgRender(156)}
        {imgRender(157)}
        {imgRender(158)}
        {imgRender(159)}
        {imgRender(160)}
        {imgRender(161)}
        {imgRender(162)}
        {imgRender(163)}
        {imgRender(164)}
        {imgRender(165)}
        {imgRender(166)}
      </div>
    </div>
  )
}

export default EarlyStereo