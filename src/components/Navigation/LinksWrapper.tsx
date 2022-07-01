import SingleLink from "components/Navigation/SingleLink";
import NavigationLinks from "data/NavigationLinks";

import { isMobile, Wrapper } from "components/Navigation/LinksWrapper.style";

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
