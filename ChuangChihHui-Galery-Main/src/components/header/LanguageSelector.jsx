import React from 'react'

const LanguageSelector = ({ isOpen, onLanguageSelect, languageSelectorRef, t }) => (
    <div className="language-selector" ref={languageSelectorRef}>
        <FaEarthAfrica size={20} onClick={() => onLanguageSelect()} />
        {isOpen && (
        <ul className="language-options">
            <li onClick={() => onLanguageSelect('ch')}>{t('中文')}</li>
            <li onClick={() => onLanguageSelect('en')}>{t('英文')}</li>
        </ul>
        )}
    </div>
  );

export default LanguageSelector