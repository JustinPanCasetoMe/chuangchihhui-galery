import { useState, useEffect, useRef } from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import menuItems from '../datas/menuItem.json';
import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './header/LanguageSelector';

const Header = () => {
    const [activeSubMenu, setActiveSubMenu] = useState(null); // 用於追蹤哪個選單被點擊
    const [activeMenu, setActiveMenu] = useState('default');
    const menuRef = useRef(null); // 用於檢測點擊外部
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制漢堡選單是否打開
    const { t } = useTranslation();
    console.log(isMenuOpen)
    // ==================== Reload Menu ====================
    useEffect(() => {
        const pathname = location.pathname;
        const menuMapping = {
            '/portfolio/artworks': 'artworks',
            '/events': 'events',
            '/experiences': 'experiences',
            '/critics': 'critics',
            '/contacts': 'contacts',
        };
        setActiveMenu(menuMapping[pathname] || 'artworks');
    }, [location.pathname]);

    // 點擊主選單時顯示/隱藏子選單
    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId)
        setIsMenuOpen(false)
        setActiveSubMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
    };
    
    // 點擊子選單的行為
    const handleSubMenuClick = () => {
        setActiveSubMenu(null);
        setIsMenuOpen(false)
        setActiveMenu('default')
    };

    //
    const handleBurgerBtn = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // 點擊外部時關閉子選單
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !event.target.closest('.subMenuLink')
            ) {
                setActiveSubMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItemRender = menuItems.map((menu, index) => {
        return (
            <div key={index} className="menuItemContainer" ref={menuRef}>
                {/* 主選單 */}
                {menu.sub ? (
                    <div
                        className={`menuItem ${activeSubMenu === menu.id ? 'active' : ''}`}
                        onClick={() =>{ { !activeSubMenu ? handleMenuClick(menu.id) : ''}}}
                    >
                        {t(menu.menu)}

                        {/* 子選單：僅在主選單被點擊時顯示 */}
                        {menu.sub && activeSubMenu === menu.id && (
                            <ul className="subMenu">
                                {menu.sub.map((subMenu, subMenuIdx) => (
                                    <li key={subMenuIdx} className="subMenuItem">
                                        <Link
                                            to={`/portfolio/${subMenu.pathname}`}
                                            className="subMenuLink"
                                            onClick={() => {handleSubMenuClick();setActiveMenu('')}} // 點擊子選單後關閉
                                        >
                                            {t(subMenu.text)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ) : (
                    <Link
                        to={menu.url}
                        className={`menuItem ${activeMenu === menu.id ? 'active' : ''}`}
                        onClick={() => setActiveMenu(menu.id)}
                    >
                        {t(menu.menu)}
                    </Link>
                )}
            </div>
        );
    });

    return (
        <div className={`headerContainer`}>
            
            {/* 漢堡按鈕 */}
            <div
                className="hamburgerButton"
                style={{color: `${isMenuOpen ? '#fff' : '#000'}`}}
                onClick={() => handleBurgerBtn()}
            >
                <h1>☰</h1>
            </div>

            <header className={`header ${isMenuOpen ? 'open' : 'close'}`}>
                {/* Logo */}
                <Link to="/" className="LogoContainer">
                    <div className="Logo df aln-itm-c">
                        <img
                            src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg"
                            alt="Logo"
                            className="mg-r-20"
                        />
                        <div className='LogoTxt'>
                            <h3>莊志輝</h3>
                            <h3>CHUANG CHIH HUI</h3>
                        </div>
                    </div>
                </Link>

                {/* 主選單 */}
                <div className={`menuContainer ${isMenuOpen ? 'open' : ''}`}>
                    {menuItemRender}
                    <LanguageSelector />
                </div>
            </header>
            
            
        </div>
    );
};

export default Header;