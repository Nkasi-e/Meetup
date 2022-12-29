import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Bar = styled.nav`
  font-size: 16px;
  font-weight: 500;
  background-color:  #fcdac5
  /* border: 1px solid rgba(0,0,0,0.2); */
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;
// /* display: ${ props => props.display }; */
export const MainNav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;
export const NavLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;
// export const Logo  = NavLink.extend`
//   display: inline-block;
//   font-size: 22px;
//   margin-top: 10px;
//   margin-left: 20px;
// `
export const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;
