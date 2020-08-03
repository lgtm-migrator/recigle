import search, { SearchState } from "reducers/search";
import searchHistory, { SearchHistoryState } from "reducers/searchHistory";
import site, { SiteState } from "reducers/site";

import { combineReducers } from "redux";

export type State = {
  search: SearchState;
  searchHistory: SearchHistoryState;
  site: SiteState;
};

const reducer = combineReducers<State>({ search, searchHistory, site });

export default reducer;
