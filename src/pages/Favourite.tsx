import React, { useContext } from 'react';
import FavoriteContext from '../store/favorites-context';
import MeetupItems from '../layout/meetups/MeetupItems';

const Favourite = () => {
  const favouriteCtx = useContext(FavoriteContext);

  let content;

  if (favouriteCtx.totalFavorites === 0) {
    content = <p>You have no favourite</p>;
  } else {
    content = favouriteCtx.favorites;
  }

  return (
    <section>
      <h3>All Favorites</h3>
      {content}
    </section>
  );
};

export default Favourite;
