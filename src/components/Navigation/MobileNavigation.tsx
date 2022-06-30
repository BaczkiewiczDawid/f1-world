import styled, { keyframes } from "styled-components";
import LinksWrapper from "components/Navigation/LinksWrapper";

const slide = keyframes`
  0% {
    width: 20vw;
  }

  100% {
    width: 70vw;
  }
`;

const Container = styled.div`
  position: fixed;
  width: 70vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  right: 0;
  z-index: -1;
  -webkit-box-shadow: 2px 10px 32px -1px rgba(42, 42, 42, 1);
  -moz-box-shadow: 2px 10px 32px -1px rgba(42, 42, 42, 1);
  box-shadow: 2px 10px 32px -1px rgba(42, 42, 42, 1);
  animation: ${slide} .25s linear alternate;
`;

const MobileNavigation = () => {
  return (
    <Container>
      <LinksWrapper mobile={true} />
    </Container>
  );
};

export default MobileNavigation;
