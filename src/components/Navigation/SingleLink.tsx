import { StyledLink, LinkType } from 'components/Navigation/SingleLink.style';

const SingleLink = ({ path, name }: LinkType) => {
  return <StyledLink to={path}>{name}</StyledLink>;
};

export default SingleLink;
