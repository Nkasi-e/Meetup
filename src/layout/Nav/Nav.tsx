import React from 'react';
import { Bar, Logo, MainNav, NavLi, NavLink } from './nav.styles';

const Nav = () => {
  return (
    <Bar>
      <Logo>
        <h4>Logo</h4>
      </Logo>
      {/* <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger />
      </NavBarToggle>
      <Logo to="#">logo</Logo> */}
      <MainNav>
        <NavLi>
          <NavLink to="/">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="newmeetup">New Meetup</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="favourite">Favorites</NavLink>
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
