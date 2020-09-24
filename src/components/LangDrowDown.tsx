import React, { FunctionComponent, ReactElement, useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'shards-react';
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
    <Dropdown
      open={langDropOpen}
      toggle={toggleLangDropdown}
      className="d-table"
    >
      <DropdownToggle theme="white">
        <span role="img" aria-label="globle">
          🌐
        </span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => handleChangeLanguage('en')}>
          English
        </DropdownItem>
        <DropdownItem onClick={() => handleChangeLanguage('fr')}>
          Français
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default LangDrowDown;
