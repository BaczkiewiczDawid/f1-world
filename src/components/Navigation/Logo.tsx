import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.img`
  width: 4rem;
  height: auto;
  margin-left: 3rem;
`;

type LogoAtr = {
  src: string;
  alt: string;
};

const Logo = ({ src, alt }: LogoAtr) => {
  return (
    <Link to="/">
      <StyledLogo src={src} alt={alt} />
    </Link>
  );
};

export default Logo;
