import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  &:nth-child(n + 2) {
    margin-left: 3rem;
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
