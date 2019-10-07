import styled from 'styled-components';

export const MenuNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  will-change: transform;
  min-height: -webkit-fill-available;
  height: ${props => props.theme.vh};
  width: ${props => props.theme.vw};
  background: linear-gradient(
    -45deg,
    #fff,
    ${props => props.theme.secondaryColor},
    #a4d8dd,
    #d2f2f5
  );
  background-size: 400% 400%;
  transition: background-position 0.5s ease-out;
`;

export const MenuContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  list-style: none;
  margin: 0;
`;

export const MenuItem = styled.li`
  font-size: 5rem;
  font-family: ${props => props.theme.fontBold};
  color: ${props => props.theme.primaryColor};
  letter-spacing: -1px;
  line-height: 6rem;
  opacity: 0;
  transform: translateY(-2.5rem);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
