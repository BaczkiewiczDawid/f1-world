import { useState } from "react";
import Logo from "components/Navigation/Logo";
import {
  Navigation,
  HamburgerWrapper
} from "components/Navigation/Navigation.style";
import { Squash as Hamburger } from "hamburger-react";
import MobileNavigation from "components/Navigation/MobileNavigation";
import LinksWrapper from 'components/Navigation/LinksWrapper';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <Navigation>
      <Logo src="https://i.imgur.com/b8mo2gF.png" alt="f1 logo" />
      <HamburgerWrapper>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          onToggle={handleOpenMenu}
          color={isOpen ? "#2a2a2a" : "#fafafa"}
        />
        {isMenuOpen && <MobileNavigation />}
      </HamburgerWrapper>
      <LinksWrapper mobile={false} />
    </Navigation>
  );
};

export default Navbar;
