import { Link } from 'react-router-dom'
import thumbnails from '../../datas/thumbnails.json'

const Classics = () => {

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
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>各時期經典</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(49)}
        {imgRender(51)}
        {imgRender(52)}
        {imgRender(53)}
        {imgRender(54)}
        {imgRender(55)}
        {imgRender(56)}
        {imgRender(57)}
        {imgRender(58)}
        {imgRender(59)}
        {imgRender(60)}
        {imgRender(61)}
        {imgRender(62)}
        {imgRender(63)}
        {imgRender(64)}
        {imgRender(65)}
        {imgRender(66)}
        {imgRender(67)}
        {imgRender(68)}
      </div>
    </div>
  )
}

export default Classics