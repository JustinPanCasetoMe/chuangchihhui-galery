import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleRight, FaBars } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import '../i18n'
import { useTranslation } from 'react-i18next'
import menuItems from '../datas/menuItem.json'

const Header = () => {

    const ScreenWidth = window.innerWidth
    const { t, i18n } = useTranslation()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const [menuItem, setMenuItem] = useState('Artworks')
    const [menuToggle, setMenuToggle] = useState()

    const [menuHover, setMenuHover] = useState(false);
    const [subMenuHover, setSubMenuHover] = useState(false);
    const [subMenuCubeHover, setSubMenuCubeHover] = useState(false);
    const [subOpen, setSubOpen] = useState(false)
    const [menuBarStatus, setMenuBarStatus] = useState(false)
    const [langActive, setLangActive] = useState(false)

    // ==================== Reload function ====================

    useEffect(() => {
        const pathname = location.pathname;
        handleReloadMenu(pathname);
    }, [location.pathname]);

    const handleReloadMenu = (pathname) => {
        switch(pathname){
        case '/portfolio/artworks':
            setMenuItem('artworks');
            break;
        case '/events':
            setMenuItem('events')
            break;
        case '/experiences':
            setMenuItem('experiences')
            break;
        case '/critics':
            setMenuItem('critics')
            break;
        case '/contacts':
            setMenuItem('contacts')
            break;
        }
    }

  // ==================== MenuItem Render ====================
    const handleSubToggle = () => {
        setMenuToggle(!menuToggle)
    }

    const menuItemRender = menuItems.map((menu, index) => {
        const subMenuItemRender = menu.sub.map((sub, subIndex) => {
            return(
                <li
                    className='bd-b'
                    style={{width:"200px"}}
                >
                    <Link
                        key={subIndex}
                        to={`/portfolio/${sub.pathname}`}
                        className='df aln-itm-c pd-10'
                    >
                        {sub.text}
                        <FaAngleRight size={16} className='pd-l-10'/>
                    </Link>
                </li>
            )
        })

        return(
            <li key={index} onClick={()=>{setMenuItem(menu.id)}} className='pd-w-10' style={{position:"relative"}}>
                <Link
                    to={`${menu.url}`}
                    className={`pd-10 df aln-itm-c ${menu.id==menuItem ? 'menuItemActive' : ''}`}
                    style={{color:`${menu.id==menuItem ? '#383838' : ''}`}}
                    onMouseEnter={()=> setMenuToggle(menu.id)}
                    onMouseLeave={()=> setMenuToggle()}
                >
                    {t(menu.menu)} 
                    <FaAngleDown size={16} className={`pd-l-10 ${menu.id == 'artworks' ? 'db' : 'dn'}`}/>
                    <ul
                        className={`${ menu.id == menuToggle? 'db' : 'dn'} pointer`}
                        style={{
                            position:"absolute",
                            top:"100%",
                            left:"20px",
                            paddingTop:"10%",
                            backgroundColor:"#fff",
                            border:"0.6px solid var(--grey-1)"
                    }}>
                        {subMenuItemRender}
                    </ul>
                </Link>
        </li>
        )
    })

    // ==================== Language Select ====================
    const handleLanguageSelect = () => {
        setLangActive(!langActive)
    }
    const handleCloseLng = () => {
        setLngSubClose(false)
    }

    const languageSelect = (e) => {
        console.log(e.target.value)
    }

    const menubarToggle = () => {
        setMenuBarStatus(!menuBarStatus)
    }

    const handleMenubarClose = (menu) => {
        setMenuBarStatus(false)
        setSubOpen(false)
        setMenuItem(menu)
    }

    const handleSubOpen = () => {
        return(
            <div></div>
        )
    }


    return (
        <>
            {/* Navigation Bar for the website version*/}
            <header className={`
            df jc-sb aln-itm-c fw pd-x-container
            ${(1024<=ScreenWidth && ScreenWidth < 1960) ? '' : 'dn'}  
            `}>
            <div className='df jc-sb aln-itm-c fw'>
                {/* Logo Container */}
                <Link to='/' onClick={handleMenubarClose}>
                <div className="Logo df aln-itm-c">
                    <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='mg-r-20' style={{height:'40%'}}/>
                    <div style={{width:'300px'}}>
                    <h3 style={{fontSize:'18px'}}>莊志輝</h3>
                    <h3 style={{fontSize:'18px'}}>CHUANG CHIH HUI</h3>
                    </div>
                </div>
                </Link>

                <div className='fh df jc-sb aln-itm-c'>
                    {menuItemRender}
                </div>
                
            </div>

            

            {/* ========== Language Select ========== */}
            <ul style={{position:'relative'}} className='df fd-c pd-w-10 fh jc-c aln-itm-c'>
                <div className='df fd-c jc-c' onClick={handleLanguageSelect}>
                <FaEarthAfrica size={20}/>
                </div>
                <ul
                className='df fd-c'
                style={{
                    position:"absolute",
                    top:"160%",
                    left:"50%",
                    display:`${langActive ? '' : 'none'}`
                }}
                onClick={()=>handleCloseLng(false)}
                >
                <li className='lngSub' onClick={() => {changeLanguage('ch')}}>{t('中文')}</li>
                <li className='lngSub' onClick={() => {changeLanguage('en')}}>{t('英文')}</li>
                </ul>
            </ul>
            </header>


            {/* ======== Navigation Bar for the 768-1024 version ========*/}
            <header className={`
                df jc-sb aln-itm-c fw pd-x-container
                ${(768<=ScreenWidth && ScreenWidth < 1024) ? '' : 'dn'}  
            `}>

                {/* Logo Container */}
                <Link to='/'>
                <div className="Logo df aln-itm-c">
                    <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='fh mg-r-20' style={{height:'40%'}}/>
                    <div style={{width:'200px'}}>
                    <h3 style={{fontSize:'16px'}}>莊志輝</h3>
                    <h3 style={{fontSize:'16px'}}>CHUANG CHIH HUI</h3>
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
                    <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='fh mg-r-20' style={{height:'40%'}}/>
                    <div>
                    <h3 style={{fontSize:'16px'}}>莊志輝</h3>
                    <h3 style={{fontSize:'16px'}}>CHUANG CHIH HUI</h3>
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
                <div className="Logo df aln-itm-c">
                    <img src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg" alt="" className='fh mg-r-20' style={{height:'40%'}}/>
                    <div>
                    <h3 style={{fontSize:'16px'}}>莊志輝</h3>
                    <h3 style={{fontSize:'16px'}}>CHUANG CHIH HUI</h3>
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
                    <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c' onClick={menubarToggle}>
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
                    <Link to='/portfolio' className='pd-10 df jc-sb aln-itm-c' onClick={menubarToggle}>
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
                    {/* <li className='bd-t fw'>
                    <Link to='/collections' className={`pd-20 db`} onClick={() => handleMenubarClose('Collections')}>收藏</Link>
                    </li> */}
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