import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.2rem;

  &:nth-child(n + 1) {
    margin-top: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;

    &:nth-child(n + 1) {
      margin-top: 0;
    }

    &:nth-child(n + 2) {
      margin-left: 3rem;
    }
  }
`;

type LinkType = {
  path: string;
  name: string;
};

const SingleLink = ({ path, name }: LinkType) => {
  return <StyledLink to={path}>{name}</StyledLink>;
};

export default SingleLink;
