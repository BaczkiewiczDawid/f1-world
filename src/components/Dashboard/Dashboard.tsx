import styled from "styled-components";
import PostsList from 'components/Dashboard/PostsList';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;


const Dashboard = () => {
  return (
    <>
      <Title>Latest news</Title>
      <PostsList />
    </>
  );
};

export default Dashboard;
