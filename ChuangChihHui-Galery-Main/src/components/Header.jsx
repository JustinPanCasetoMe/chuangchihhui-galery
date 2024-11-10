import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Header = () => {

  const [menuHover, setMenuHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);

  return (
    <header className='df jc-sb aln-itm-c fw pd-x-container'>

      {/* Logo Container */}
      <Link to='/'>
        <div className="Logo df aln-itm-c">
          <img src="/logo.svg" alt="" className='fh mg-r-20'/>
          <div>
            <h3>莊志輝</h3>
            <h3>CHUANG CHIH HUI</h3>
          </div>
        </div>
      </Link>

      {/* Navigation Bar */}
      <nav className='fh'>
        <ul className='fh df jc-sb aln-itm-c'>
          <li
            className={`pd-w-10`}
            style={{position:'relative'}}
            onMouseEnter={() => setMenuHover(true)}
            onMouseLeave={() => setMenuHover(false)}
          >
            <Link to='/portfolio' className='pd-10 df aln-itm-c'>
              作品<FaAngleDown size={16} className='pd-l-10'/>
            </Link>
            <ul className={`fd-c artW-sub ${menuHover===true ? 'df' : 'dn'}`}>
              <li
                className='bd-b'
                style={{width:'200px'}}
                onMouseEnter={() => setSubMenuHover(true)}
                onMouseLeave={() => setSubMenuHover(false)}
              >
                <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c'>
                  Periods<FaAngleRight size={16} className='pd-l-10'/>
                </Link>
                <ul className={`fd-c periods-sub pd-w-10 ${subMenuHover===true ? 'df' : 'dn'}`}>
                  <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                    <Link to='/portfolio/periods/1986-2001' className='pd-y-10'>
                      <h4>1968-2001</h4>
                    </Link>
                  </li>
                  <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                    <Link to='/portfolio/periods/2002-2019' className='pd-y-10'>
                      <h4>2002-2019</h4>
                    </Link> 
                  </li>
                  <li className='pd-y-10' style={{width:'200px'}}>
                    <Link to='/portfolio/periods/2020-2024' className='pd-y-10'>
                      <h4>2020-2024</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                <Link to='/portfolio' className='pd-10'>歷代平面經典總覽</Link>
              </li>
              <li className='pd-y-10' style={{width:'200px'}}>
                <Link to='/portfolio' className='pd-10'>歷代立體經典總覽</Link>
              </li>
            </ul>
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