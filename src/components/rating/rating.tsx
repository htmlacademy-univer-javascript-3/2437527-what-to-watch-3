import {ReactElement, SyntheticEvent} from 'react';

type RatingProps = {
  value: string;
  onStarClick: (evt : SyntheticEvent) => void;
};

function Rating({value, onStarClick} : RatingProps): ReactElement {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating"
        value={value} onClick={onStarClick}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

export default Rating;
