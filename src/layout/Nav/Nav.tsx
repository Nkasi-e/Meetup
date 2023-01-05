import React, { useContext } from 'react';
import { Bar, Logo, MainNav, NavLi, NavLink } from './nav.styles';
import FavoriteContext from '../../store/favorites-context';

const Nav = () => {
  const favouriteCtx = useContext(FavoriteContext);

  let count;
  if (favouriteCtx.totalFavorites === 0) {
    count = null;
  } else {
    count = favouriteCtx.totalFavorites;
  }

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
          <NavLink to="favourite">Favorites {count}</NavLink>
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
