import { Link } from 'react-router-dom'
import thumbnails from '../../datas/thumbnails.json'

const EarlyStereo = () => {

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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>早期立體</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(99)}
        {imgRender(100)}
        {imgRender(101)}
        {imgRender(102)}
        {imgRender(103)}
        {imgRender(104)}
        {imgRender(105)}
        {imgRender(106)}
        {imgRender(107)}
        {imgRender(108)}
        {imgRender(109)}
        {imgRender(110)}
        {imgRender(111)}
        {imgRender(112)}
        {imgRender(113)}
        {imgRender(114)}
        {imgRender(115)}
        {imgRender(116)}
        {imgRender(117)}
        {imgRender(118)}
        {imgRender(119)}
        {imgRender(120)}
        {imgRender(121)}
        {imgRender(122)}
      </div>
    </div>
  )
}

export default EarlyStereo