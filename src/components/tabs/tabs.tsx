import React, {ReactElement} from 'react';
import MoviePageOverview from '../../pages/movie-page/movie-page-overview';
import MoviePageDetails from '../../pages/movie-page/movie-page-details';
import MoviePageReviews from '../../pages/movie-page/movie-page-reviews';
import {Film} from '../../types/film-types';
import {Review} from '../../types/review';
import {transparentButtonStyle} from '../../helpers/styles';

type Tab = {
  name: string;
  component: ReactElement;
}

type TabsProps = {
  film: Film;
  reviews: Review[];
}

function Tabs({film, reviews} : TabsProps): ReactElement {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs : Tab[] = [
    {
      name: 'Overview',
      component: <MoviePageOverview film={film}/>
    },
    {
      name: 'Details',
      component: <MoviePageDetails film={film}/>
    },
    {
      name: 'Reviews',
      component: <MoviePageReviews reviews={reviews}/>
    }
  ];

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            tabs.map((tab, index) => (
              <li key={tab.name} className={`film-nav__item ${activeTab === index ? 'film-nav__item--active' : ''}`}>
                <button onClick={() => setActiveTab(index)} className="film-nav__link"
                  style={transparentButtonStyle}
                >{tab.name}
                </button>
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
