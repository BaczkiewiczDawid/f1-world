import SingleLink from 'components/Navigation/SingleLink';
import Logo from 'components/Navigation/Logo'
import NavigationLinks from 'components/data/NavigationLinks';
import { Navigation, LinksWrapper } from 'components/Navigation/Navigation.style';

const Navbar = () => {
  return (
    <Navigation>
      <Logo src="https://i.imgur.com/b8mo2gF.png" alt="f1 logo" />
      <LinksWrapper>
      {NavigationLinks.map((link) => {
        return (
            <SingleLink key={link.id} path={link.path} name={link.name} />
        )
      })}
      </LinksWrapper>
    </Navigation>
  );
};

export default Navbar;
