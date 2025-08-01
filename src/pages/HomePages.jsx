import FeatureMovie from "../component/FeatureMovie";
import MediaList from "../component/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "@libs/constant";

function HomePages() {
  return (
    <div>
      <FeatureMovie />
      <MediaList tabs={TRENDING_TABS} title="Trending" />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePages;
