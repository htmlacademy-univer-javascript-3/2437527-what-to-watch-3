type StarValue = {
  value: string;
};

function Rating({value} : StarValue): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}/>
      <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
    </>
  );
}

export default Rating;
