import React from 'react';
import { Bar, MainNav, NavLi, NavLink } from './nav.styles';

const Nav = () => {
  return (
    <Bar>
      <div>
        <h4>Logo</h4>
      </div>
      {/* <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger />
      </NavBarToggle>
      <Logo to="#">logo</Logo> */}
      <MainNav>
        <NavLi>
          <NavLink to="#">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="#">About</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="#"></NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="#">Register</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="#">Login</NavLink>
        </NavLi>
      </MainNav>
    </Bar>
  );
};

export default Nav;
