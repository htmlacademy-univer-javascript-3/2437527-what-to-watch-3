import React, {ReactElement} from 'react';
import MoviePageOverview from '../../pages/movie-page/movie-page-overview';
import MoviePageDetails from '../../pages/movie-page/movie-page-details';
import MoviePageReviews from '../../pages/movie-page/movie-page-reviews';
import {Film} from '../../types/film-type';

type Tab = {
  name: string;
  component: ReactElement;
}

type TabsProps = {
  film: Film;
}

function Tabs(film : TabsProps): ReactElement {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs : Tab[] = [
    {
      name: 'Overview',
      component: <MoviePageOverview {...film}/>
    },
    {
      name: 'Details',
      component: <MoviePageDetails {...film}/>
    },
    {
      name: 'Reviews',
      component: <MoviePageReviews {...film}/>
    }
  ];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            tabs.map((tab, index) => (
              <li key={tab.name} className={`film-nav__item ${activeTab === index ? 'film-nav__item--active' : ''}`}>
                <a onClick={() => setActiveTab(index)} className="film-nav__link">{tab.name}</a>
              </li>))
          }
        </ul>
      </nav>
      {
        tabs[activeTab].component
      }
    </div>
  );
}

export default Tabs;
