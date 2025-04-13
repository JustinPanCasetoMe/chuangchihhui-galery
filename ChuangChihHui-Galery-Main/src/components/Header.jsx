import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import '../css/header.css';
import { FaBars, FaTimes } from "react-icons/fa"; // 漢堡按鈕和關閉按鈕
import menuItems from '../datas/menuItem.json';
import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './header/LanguageSelector';

const Header = () => {
    const ScreenWidth = window.innerWidth;
    const location = useLocation();
  
    const [menuItem, setMenuItem] = useState(''); // Initialize the value of menuItem
    const [isHeaderOpen, setIsHeaderOpen] = useState(false); // 控制漢堡菜單顯示狀態
    const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu
    const menuRef = useRef(null); // 用於檢測點擊外部

      // ==================== Reload function ====================
    useEffect(() => {
        const pathname = location.pathname;
        handleReloadMenu(pathname);
    }, [location.pathname]);

    const handleReloadMenu = (pathname) => {
        switch (pathname) {
        case '/portfolio/artworks':
            setMenuItem('artworks');
            break;
        case 'events':
            setMenuItem('events');
            break;
        case 'experiences':
            setMenuItem('experiences');
            break;
        case 'critics':
            setMenuItem('critics');
            break;
        case 'contacts':
            setMenuItem('contacts');
            break;
        }
    };

    // 點擊外部時關閉子選單
    useEffect(() => {
        const handleClickOutside = (event) => {
        if(
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            !event.target.closest('.subMenuLink')
        ){
            setMenuItem(null);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // ==================== Language Select ====================
    const { t, i18n } = useTranslation();
    const [langActive, setLangActive] = useState(false);

    // ==================== menuItemRender ====================
    const menuItemRender = menuItems.map((menu, index) => {

        const isCurrentMenuOpen = openSubMenu === menu.id;

        const handleMenuClick = () => {
            setMenuItem(menu.id);
            setOpenSubMenu(menu.id === openSubMenu ? null : menu.id);
    
            if (menu.sub.length > 0 && ScreenWidth <= 1024) {
                // setOpenSubMenu(menu.id === openSubMenu ? null : menu.id);
                console.log(isHeaderOpen)
            }else{
                setIsHeaderOpen(false)
            }
        };

        return (
            <li key={index} onClick={handleMenuClick} className='pd-w-10 menuItem' >
                <Link
                    to={`${menu.url}`}
                    className={`pd-10 db ${menu.id === menuItem ? 'menuItemActive' : ''}`}
                    style={{ color: `${menu.id === menuItem ? 'var(--green-1)' : ''}` }}
                >
                    {t(menu.menu)}
                </Link>

                {/* Check if there are submenus and render them */}
                {menu.sub.length > 0 && (
                    <ul className={`submenuContainer ${isCurrentMenuOpen ? 'df' : 'dn'}`}>
                        {menu.sub.map((subMenu, subIndex) => (
                            <li key={subIndex} className='submenuItem'>
                                <Link
                                    to={`/portfolio/${subMenu.url}`}
                                    className={`submenuLink ${subMenu.id === menuItem ? 'menuItemActive' : ''}`}
                                    style={{ color: `${subMenu.id === menuItem ? 'var(--green-1)' : ''}` }}
                                    onClick={() => { setOpenSubMenu(null); setIsHeaderOpen(false) }}
                                >
                                    {t(subMenu.menu)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    });

    const toggleHeader = () => {
        setIsHeaderOpen(!isHeaderOpen);
    };
    

    return (
        <>
            <div className='headerContainer'>
                {/* 漢堡按鈕 */}
                <div className="hamburger" onClick={toggleHeader}>
                    {isHeaderOpen ? <FaTimes size={30} color="#000" /> : <FaBars size={30} color="#000" />}
                </div>

                <Link to='/' className='defaultLogo'>
                    <div className="Logo">
                    <img
                        src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg"
                        alt=""
                        className='mg-r-20'
                    />
                    <div style={{ width: '200px', color: "#000" }}>
                        <h3 style={{ fontSize: '14px' }}>莊志輝</h3>
                        <h3 style={{ fontSize: '14px' }}>CHUANG CHIH HUI</h3>
                    </div>
                    </div>
                </Link>

                {/* Header */}
                <header
                    className={`${isHeaderOpen ? 'header-open' : 'header-closed'}`}
                    // onClick={() => setIsHeaderOpen(false)}
                >
                    <div className={`menuContainer ${location.pathname !== '/' ? 'df' : 'dn'}`}>
                        {/* Logo Container */}
                        <Link to='/' className='Logo' style={{ marginRight: '0px' }}>
                            <img
                                src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg"
                                alt=""
                                className='mg-r-20'/>
                            <div style={{ width: '200px', color: "#000" }}>
                                <h3 style={{ fontSize: '14px' }}>莊志輝</h3>
                                <h3 style={{ fontSize: '14px' }}>CHUANG CHIH HUI</h3>
                            </div>
                        </Link>

                        <ul className='menuItemContainer' ref={menuRef}>
                            {menuItemRender}
                        </ul>
                    </div>

                    {/* Language Select */}
                    <LanguageSelector />

                </header>
            </div>
        </>
    );
};

export default Header;