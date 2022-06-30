import LinksWrapper from "components/Navigation/LinksWrapper";
import { Container } from 'components/Navigation/MobileNavigation.style';

const MobileNavigation = () => {
  return (
    <Container>
      <LinksWrapper mobile={true} />
    </Container>
  );
};

export default MobileNavigation;
