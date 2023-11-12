import {ReactElement} from 'react';

type ShowMoreProps = {
  isHidden: boolean;
  onClick: () => void;
};

function ShowMore({isHidden, onClick} : ShowMoreProps): ReactElement {
  return (
    <div className="catalog__more" hidden={isHidden}>
      <button onClick={() => onClick()} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
