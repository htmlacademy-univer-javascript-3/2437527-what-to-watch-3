import {ReactElement} from 'react';

type ShowMoreProps = {
  onClick: () => void;
};

function ShowMore({onClick} : ShowMoreProps): ReactElement {
  return (
    <div className="catalog__more">
      <button onClick={() => onClick()} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
