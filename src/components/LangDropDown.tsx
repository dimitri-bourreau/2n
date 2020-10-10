import React, { FunctionComponent, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LangDrowDown: FunctionComponent = (): ReactElement => {
  const { i18n } = useTranslation();
  const [langDropOpen, setlangDropOpen] = useState(false);

  const toggleLangDropdown = (): null => {
    setlangDropOpen(!langDropOpen);
    return null;
  };

  const handleChangeLanguage = (newLanguage: string): null => {
    i18n.changeLanguage(newLanguage);
    return null;
  };

  return (
    <div id="langDropDown">
      {/* <Dropdown
        open={langDropOpen}
        toggle={toggleLangDropdown}
        className="d-table"
        size="sm"
      >
        <DropdownToggle theme="white">
          <span role="img" aria-label="globle">
            🌐
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={(): null => handleChangeLanguage('en')}>
            English
          </DropdownItem>
          <DropdownItem onClick={(): null => handleChangeLanguage('fr')}>
            Français
          </DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
    </div>
  );
};

export default LangDrowDown;
