import React from 'react';

import FeedBanner from '../../components/feed-banner/feed-banner';
import FeedContainer from '../../components/feed-container/feed-container';
import GlobalFeedContent from '../../components/global-feed-content/global-feed-content';
import PopularTags from '../../components/popular-tags/popular-tags';


const GlobalFeed = ({location, match}) => {

  return (
    <div className="home-page">
      <FeedBanner />
      <FeedContainer>
        <GlobalFeedContent location={location} match={match} /> 
        <PopularTags />
      </FeedContainer>
    </div>
  );
};

export default GlobalFeed;