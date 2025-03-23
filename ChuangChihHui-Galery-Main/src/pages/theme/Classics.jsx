import { Link } from 'react-router-dom'
import artworks from '../../datas/artworks.json'
import { useTranslation } from 'react-i18next';
import '../../i18n';

const Classics = () => {

  const ScreenWidth = window.innerWidth
  const { t, i18n } = useTranslation();

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
    <div className={`${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'} pd-xContainer`}>
      <h3 className='periodTitle' style={{marginBottom:'160px'}}>{t('各時期經典')}</h3>
      <div className='df jc-sb fl-wp'>
        {imgRender(5)}
        {imgRender(7)}
        {imgRender(40)}
        {imgRender(8)}
        {imgRender(86)}
        {imgRender(90)}
        {imgRender(39)}
        {imgRender(37)}
        {imgRender(25)}
        {imgRender(48)}
        {imgRender(65)}
        {imgRender(91)}
        {imgRender(113)}
        {imgRender(114)}
        {imgRender(115)}
        {imgRender(116)}
        {imgRender(117)}
        {imgRender(118)}
        {imgRender(96)}
        {imgRender(4)}
      </div>
    </div>
  )
}

export default Classics