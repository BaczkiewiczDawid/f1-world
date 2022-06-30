import { LogoAtr, StyledLogo } from 'components/Navigation/Logo.style';
import { Link } from "react-router-dom";

const Logo = ({ src, alt }: LogoAtr) => {
  return (
    <Link to="/">
      <StyledLogo src={src} alt={alt} />
    </Link>
  );
};

export default Logo;
