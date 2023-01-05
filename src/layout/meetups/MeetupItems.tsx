import React, { useContext } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import FavoriteContext from '../../store/favorites-context';

interface IMeetup {
  id?: number;
  image: string;
  title: string;
  description: string;
  address: string;
}

const MeetupItems = ({
  id,
  image,
  title,
  description,
  address,
}: IMeetup): JSX.Element => {
  const favoriteCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(id);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite({
        id: id,
        image: image,
        title: title,
        description: description,
        address: address,
      });
    }
  };

  return (
    <Wrapper>
      <Card>
        <StyledImage>
          <img src={image} alt={title} />
        </StyledImage>
        <div>
          <h3>{title}</h3>
          <p>{address}</p>
          <p>{description}</p>
        </div>
        <div>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MeetupItems;
