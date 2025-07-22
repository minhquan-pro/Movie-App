import Header from "../component/Header";
import FeatureMovie from "../component/FeatureMovie";
import MediaList from "../component/MediaList";
import { TRENDING_TABS } from "../libs/constant";
import { TOP_RATED_TABS } from "../libs/constant";

function HomePage() {
  return (
    <div>
      <FeatureMovie />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePage;
