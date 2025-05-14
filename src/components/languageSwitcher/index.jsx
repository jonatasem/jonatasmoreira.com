import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';

// Componente para trocar entre idiomas
const LanguageSwitcher = ({ mobClickSon, menuPrev }) => {
  const { i18n } = useTranslation();

  // Estado para armazenar o idioma atual
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Atualiza o estado de currentLanguage sempre que o idioma mudar
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='language-switcher'>
      <button 
        className={currentLanguage === 'pt' ? 'active-language' : ''} 
          onClick={() => {
            changeLanguage('pt');
            mobClickSon();
            menuPrev();
          }
        }
      >
        Português
      </button>
      <button 
        className={currentLanguage === 'en' ? 'active-language' : ''}
        onClick={() => 
          {
            changeLanguage('en')
            mobClickSon();
            menuPrev();
          }
        }
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;