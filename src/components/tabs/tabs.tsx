import React, {ReactElement} from 'react';
import MoviePageOverview from '../../pages/movie-page/movie-page-overview';
import MoviePageDetails from '../../pages/movie-page/movie-page-details';
import MoviePageReviews from '../../pages/movie-page/movie-page-reviews';

function Tabs(): ReactElement {
  const [activeTab, setActiveTab] = React.useState(0);

  function renderTab(tabId) {
    switch(tabId) {
      case 0:
        return <MoviePageOverview/>;
      case 1:
        return <MoviePageDetails/>;
      case 2:
        return <MoviePageReviews/>;
    }
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 0 ? 'film-nav__item--active' : ''}`}>
            <a onClick={() => setActiveTab(0)} className="film-nav__link">Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === 1 ? 'film-nav__item--active' : ''}`}>
            <a onClick={() => setActiveTab(1)} className="film-nav__link">Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === 2 ? 'film-nav__item--active' : ''}`}>
            <a onClick={() => setActiveTab(2)} className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {
        renderTab(activeTab)
      }
    </div>
  );
}

export default Tabs;
