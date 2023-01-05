import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: any) => {},
  removeFavorite: (meetupId: any) => {},
  itemIsFavorite: (meetupId: any): any => {},
});

// interface IProp {
//   [children: string]: any;
//   //   children: any | string;
// }

export const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup: any) => {
    setUserFavorites((prevUserFavorites: any) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId: any) => {
    setUserFavorites((prevUserFavorites: any) => {
      return prevUserFavorites.filter((meetup: any) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId: any): any => {
    return userFavorites.some((meetup: any) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
