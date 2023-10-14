type Props = {
  className?: string;
}

function Logo({className = 'logo__link'} : Props): JSX.Element {
  return (
    <div className="logo">
      <a className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
