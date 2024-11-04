import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='df jc-sb aln-itm-c fw pd-x-container'>

      {/* Logo Container */}
      <Link to='/'>
        <div className="Logo df aln-itm-c">
          <img src="/logo.svg" alt="" className='fh mg-r-20'/>
          <div>
            <h2>莊志輝</h2>
            <h2>CHUANG CHIH HUI</h2>
          </div>
        </div>
      </Link>

      {/* Navigation Bar */}
      <nav className='fh'>
        <ul className='fh df jc-sb aln-itm-c'>
          <li className='pd-w-10'>
            <Link to='/portfolio' className='pd-10'>作品</Link>
          </li>
          <li className='pd-w-10'>
            <Link to='/experiences' className='pd-10'>資歷</Link>
          </li>
          <li className='pd-w-10'>
            <Link to='critics' className='pd-10'>藝評</Link>
          </li>
          <li className='pd-w-10'>
            <Link to='collections' className='pd-10'>收藏</Link>
          </li>
          <li className='pd-w-10'>
            <Link to='contacts' className='pd-10'>聯絡</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header