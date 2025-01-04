import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import '../i18n'
import { useTranslation } from 'react-i18next'

const Header = () => {

  const ScreenWidth = window.innerWidth
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const [menuHover, setMenuHover] = useState(false);
  const [subMenuHover, setSubMenuHover] = useState(false);
  const [subMenuCubeHover, setSubMenuCubeHover] = useState(false);
  const [subOpen, setSubOpen] = useState(false)
  const [menuBarStatus, setMenuBarStatus] = useState(false)
  const [menuItem, setMenuItem] = useState('Artworks')

  const menubarToggle = () => {
    setMenuBarStatus(!menuBarStatus)
  }

  const handleMenubarClose = (menu) => {
    setMenuBarStatus(false)
    setSubOpen(false)
    setMenuItem(menu)
  }

  const handleSubOpen = () => {
    setSubOpen(!subOpen)
  }


  console.log('menuItem = ', menuItem)


  return (
    <>
      {/* Navigation Bar for the website version*/}
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
      `}>
        {/* Logo Container */}
        <Link to='/' onClick={handleMenubarClose}>
          <div className="Logo df aln-itm-c">
            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/>
            <div>
              <h3 style={{fontSize:'18px'}}>莊志輝</h3>
              <h3 style={{fontSize:'18px'}}>CHUANG CHIH HUI</h3>
            </div>
          </div>
        </Link>

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
                {/* 歷代平面經典總覽 */}
                <li
                  className='bd-b'
                  style={{width:'200px', position:'relative'}}
                  onMouseEnter={() => setSubMenuHover(true)}
                  onMouseLeave={() => setSubMenuHover(false)}
                  >
                  <Link className='pd-10 df jc-sb aln-itm-c'>
                    歷代平面經典總覽<FaAngleRight size={16} className='pd-l-10'/>
                  </Link>
                  <ul className={`fd-c periods-sub pd-w-10 ${subMenuHover===true ? 'df' : 'dn'}`}>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/1986-2001' className='pd-y-10'>
                        1968-2001
                      </Link>
                    </li>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2002-2019' className='pd-y-10'>
                        2002-2019
                      </Link> 
                    </li>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2020-2024' className='pd-y-10'>
                        2020-2024
                      </Link>
                    </li>
                    <li className='pd-y-10' style={{width:'200px'}}>
                      <Link to='/portfolio/unxiangarea' className='pd-y-10'>
                        無相之境
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* 歷代立體經典總覽 */}
                <li
                  className=''
                  style={{width:'200px', position:'relative'}}
                  onMouseEnter={() => setSubMenuCubeHover(true)}
                  onMouseLeave={() => setSubMenuCubeHover(false)}
                  >

                  {/* 歷代立體經典總覽 */}
                  <Link to='/portfolio/threeD' className='pd-10 df jc-sb aln-itm-c'>
                    歷代立體經典總覽<FaAngleRight size={16} className='pd-l-10'/>
                  </Link>
                  {/* <ul className={`fd-c periods-sub pd-w-10 ${subMenuCubeHover===true ? 'df' : 'dn'}`}>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/1986-2001' className='pd-y-10'>
                        <h4>To be Determined 01</h4>
                      </Link>
                    </li>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2002-2019' className='pd-y-10'>
                        <h4>To be Determined 02</h4>
                      </Link> 
                    </li>
                    <li className='pd-y-10' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2020-2024' className='pd-y-10'>
                        <h4>To be Determined 03</h4>
                      </Link>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </li>
            <li className='pd-w-10'>
              {/* <Link to='/experiences' className='pd-10' onClick={() => handleMenubarClose('Experiences')}>資歷</Link> */}
              <Link to='/experiences' className='pd-10' onClick={() => handleMenubarClose('Experiences')}>{t('資歷')}</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/transactionInput' className='pd-10' onClick={() => handleMenubarClose('Critics')}>ECpay</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/critics' className='pd-10' onClick={() => handleMenubarClose('Critics')}>藝評</Link>
            </li>
            {/* <li className='pd-w-10'>
              <Link to='/collections' className='pd-10' onClick={() => handleMenubarClose('Collections')}>收藏</Link>
            </li> */}
            <li className='pd-w-10'>
              <Link to='/contacts' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>聯絡</Link>
            </li>
            <li className='pd-w-10'>
              <select
                name=""
                id=""
                style={{padding:'2px 4px'}}
                onClick={(e) => changeLanguage(e.target.value)}
              >
                <option value="ch">Ch</option>
                <option value="en">En</option>
              </select>
              {/* <Link to='' className='pd-10' onClick={() => handleMenubarClose('Contacts')}>En</Link> */}
            </li>
          </ul>
        </nav>
      </header>


      {/* ======== Navigation Bar for the 768-1024 version ========*/}
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}  
      `}>

        {/* Logo Container */}
        <Link to='/'>
          <div className="Logo df aln-itm-c">
            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='fh mg-r-20'/>
            <div>
              <h3>莊志輝</h3>
              <h3>CHUANG CHIH HUI</h3>
            </div>
          </div>
        </Link>

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
                  style={{width:'200px', position:'relative'}}
                  onMouseEnter={() => setSubMenuHover(true)}
                  onMouseLeave={() => setSubMenuHover(false)}
                  >
                  {/* 歷代平面經典總覽 */}
                  <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c'>
                    歷代平面經典總覽<FaAngleRight size={16} className='pd-l-10'/>
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
                <li
                  className=''
                  style={{width:'200px', position:'relative'}}
                  onMouseEnter={() => setSubMenuCubeHover(true)}
                  onMouseLeave={() => setSubMenuCubeHover(false)}
                  >

                  {/* 歷代立體經典總覽 */}
                  <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c'>
                    歷代立體經典總覽<FaAngleRight size={16} className='pd-l-10'/>
                  </Link>
                  <ul className={`fd-c periods-sub pd-w-10 ${subMenuCubeHover===true ? 'df' : 'dn'}`}>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/1986-2001' className='pd-y-10'>
                        <h4>To be Determined 01</h4>
                      </Link>
                    </li>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2002-2019' className='pd-y-10'>
                        <h4>To be Determined 02</h4>
                      </Link> 
                    </li>
                    <li className='pd-y-10' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2020-2024' className='pd-y-10'>
                        <h4>To be Determined 03</h4>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='pd-w-10'>
              <Link to='/experiences' className='pd-10'>資歷</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/critics' className='pd-10'>藝評</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/collections' className='pd-10'>收藏</Link>
            </li>
            <li className='pd-w-10'>
              <Link to='/contacts' className='pd-10'>聯絡</Link>
            </li>
          </ul>
        </nav>
      </header>


      {/* ======== Navigation Bar for the 425-768 version ========*/}
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(425<=ScreenWidth && ScreenWidth < 768) ? '' : 'dn'}  
      `}>

        {/* Logo Container */}
        <Link to='/'>
          <div className="Logo df aln-itm-c">
            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='fh mg-r-20'/>
            <div>
              <h3>莊志輝</h3>
              <h3>CHUANG CHIH HUI</h3>
            </div>
          </div>
        </Link>

        <FaBars 
          size={32}
          className='menuBar'
          onClick={menubarToggle}
        />

        <nav className={`${menuBarStatus ? 'menuMobile' : 'dn'}`}>
          <ul className='df fd-c' style={{width:'250px'}}>
            <li
              className={`bd-t fw`}
              style={{position:'relative'}}
              onMouseEnter={() => setMenuHover(true)}
              onMouseLeave={() => setMenuHover(false)}
              >
              <Link to='/portfolio' className='pd-20 df jc-sb aln-itm-c'>
                作品<FaAngleDown size={16}/>
              </Link>

              <ul className={`fd-c artW-sub ${menuHover===true ? 'df' : 'dn'}`}>
                <li
                  className='bd-b'
                  style={{width:'200px', position:'relative'}}
                  onMouseEnter={() => setSubMenuHover(true)}
                  onMouseLeave={() => setSubMenuHover(false)}
                  >
                  {/* 歷代平面經典總覽 */}
                  <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c'>
                    歷代平面經典總覽<FaAngleRight size={16} className='pd-l-10'/>
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
                <li
                  className=''
                  style={{width:'200px', position:'relative'}}
                  onMouseEnter={() => setSubMenuCubeHover(true)}
                  onMouseLeave={() => setSubMenuCubeHover(false)}
                  >

                  {/* 歷代立體經典總覽 */}
                  <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c'>
                    歷代立體經典總覽<FaAngleRight size={16} className='pd-l-10'/>
                  </Link>
                  <ul className={`fd-c periods-sub pd-w-10 ${subMenuCubeHover===true ? 'df' : 'dn'}`}>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/1986-2001' className='pd-y-10'>
                        <h4>To be Determined 01</h4>
                      </Link>
                    </li>
                    <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2002-2019' className='pd-y-10'>
                        <h4>To be Determined 02</h4>
                      </Link> 
                    </li>
                    <li className='pd-y-10' style={{width:'200px'}}>
                      <Link to='/portfolio/periods/2020-2024' className='pd-y-10'>
                        <h4>To be Determined 03</h4>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>
            <li className='bd-t fw'>
              <Link to='/experiences' className='pd-20 db'>資歷</Link>
            </li>
            <li className='bd-t fw'>
              <Link to='/critics' className='pd-20 db'>藝評</Link>
            </li>
            <li className='bd-t fw'>
              <Link to='/collections' className='pd-20 db'>收藏</Link>
            </li>
            <li className='bd-t fw'>
              <Link to='/contacts' className='pd-20 db'>聯絡</Link>
            </li>
          </ul>
        </nav>
      </header>


      {/* ======== Navigation Bar for the 375-425 version ========*/}
      <header className={`
        df jc-sb aln-itm-c fw pd-x-container
        ${(375<=ScreenWidth && ScreenWidth < 425) ? '' : 'dn'}  
      `}>


        {/* Logo Container */}
        <Link to='/' onClick={handleMenubarClose}>
          <div className="Logo df jc-sb aln-itm-c">
            <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='fh mg-r-20'/>
            <div>
              <h3>莊志輝</h3>
              <h3>CHUANG CHIH HUI</h3>
            </div>
          </div>
        </Link>

        <FaBars 
          size={32}
          className='menuBar'
          onClick={menubarToggle}
        />

        <nav className={`${menuBarStatus ? 'menuMobile' : 'dn'}`}>
          <ul className='df fd-c' style={{width:'250px'}}>
            <li
              className={`bd-t fw`}
              style={{position:'relative'}}
              onMouseEnter={() => setMenuHover(true)}
              onMouseLeave={() => setMenuHover(false)}
              >
              <Link to='/portfolio' className='pd-20 df jc-sb aln-itm-c' onClick={handleSubOpen}>
                作品<FaAngleDown size={16}/>
              </Link>

              <ul className={`fd-c ${menuHover===true ? 'df' : 'dn'}`}>
              </ul>
            </li>

            {/* 歷代平面經典總覽 */}
            <li
              className={`bd-b ${subOpen && menuHover ? '' : 'dn'}`}
              style={{width:'200px', position:'relative'}}
              onMouseEnter={() => setSubMenuHover(true)}
              onMouseLeave={() => setSubMenuHover(false)}
              >
              <Link to='/portfolio/graphics' className='pd-10 df jc-sb aln-itm-c' onClick={menubarToggle}>
                歷代平面經典總覽<FaAngleRight size={16} className='pd-l-10'/>
              </Link>
            </li>

            {/* <ul className={`fd-c pd-w-10 ${subMenuHover===true ? 'df' : 'dn'}`}>
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
            </ul> */}

            {/* 歷代立體經典總覽 */}
            <li
              className={`${subOpen && menuHover? '' : 'dn'}`}
              style={{width:'200px', position:'relative'}}
              onMouseEnter={() => setSubMenuCubeHover(true)}
              onMouseLeave={() => setSubMenuCubeHover(false)}
              >
              <Link to='/portfolio/threeD' className='pd-10 df jc-sb aln-itm-c' onClick={menubarToggle}>
                歷代立體經典總覽<FaAngleRight size={16} className='pd-l-10'/>
              </Link>
            </li>
            {/* <ul className={`fd-c periods-sub pd-w-10 ${subMenuCubeHover===true ? 'df' : 'dn'}`}>
              <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                <Link to='/portfolio/periods/1986-2001' className='pd-y-10'>
                  <h4>To be Determined 01</h4>
                </Link>
              </li>
              <li className='pd-y-10 bd-b' style={{width:'200px'}}>
                <Link to='/portfolio/periods/2002-2019' className='pd-y-10'>
                  <h4>To be Determined 02</h4>
                </Link> 
              </li>
              <li className='pd-y-10' style={{width:'200px'}}>
                <Link to='/portfolio/periods/2020-2024' className='pd-y-10'>
                  <h4>To be Determined 03</h4>
                </Link>
              </li>
            </ul> */}

            <li className='bd-t fw'>
              <Link to='/experiences' className={`pd-20 db`} onClick={() => handleMenubarClose('Experiences')}>資歷</Link>
            </li>
            <li className='bd-t fw'>
              <Link to='/critics' className={`pd-20 db`} onClick={() => handleMenubarClose('Critics')}>藝評</Link>
            </li>
            <li className='bd-t fw'>
              <Link to='/collections' className={`pd-20 db`} onClick={() => handleMenubarClose('Collections')}>收藏</Link>
            </li>
            <li className='bd-t fw'>
              <Link to='/contacts' className={`pd-20 db`} onClick={() => handleMenubarClose('Contacts')}>聯絡</Link>
            </li>
          </ul>
        </nav>
      </header>
    
    </>
  )
}

export default Header