import styled from 'styled-components';

export interface isMobile  {
    mobile: boolean,
  }

export const Wrapper = styled.div<isMobile>`
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