import styled from 'styled-components';

export const MenuNav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  transform: translateY(-${props => props.theme.vh});
  min-height: -webkit-fill-available;
  height: ${props => props.theme.vh};
  width: ${props => props.theme.vw};
  z-index: -1;
  background-color: ${props => props.theme.secondaryColor};
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
`;
