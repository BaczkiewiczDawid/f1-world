import styled from 'styled-components';

const Navigation = styled.nav`
    width: 100vw;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.red};
`;

const Navbar = () => {
    return (
        <Navigation>
            <img />
            <div>
                
            </div>
        </Navigation>
    )
}

export default Navbar;