import styled from "styled-components";
import SingleLink from "components/Navigation/SingleLink";
import NavigationLinks from "components/data/NavigationLinks";

interface isMobile  {
  mobile: boolean,
}

const Wrapper = styled.div<isMobile>`
  display: ${props => props.mobile ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5rem;
  margin-top: 8rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-right: 5rem;
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    margin-left: 10rem;
  }
`;

const LinksWrapper = ({ mobile }: isMobile) => {
  return (
    <Wrapper mobile={mobile}>
      {NavigationLinks.map((link) => {
        return <SingleLink key={link.id} path={link.path} name={link.name} />;
      })}
    </Wrapper>
  );
};

export default LinksWrapper;
