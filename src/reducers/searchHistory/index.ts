import { reducerWithInitialState } from "typescript-fsa-reducers";
import setSearchHistory from "actions/setSearchHistory";

export type SearchHistoryState = {
  searchHistories: string[];
};

const initialState: Readonly<SearchHistoryState> = {
  searchHistories: [],
};

const searchHistory = reducerWithInitialState(
  initialState
).case(setSearchHistory, (state, payload) => ({ ...state, ...payload }));

export default searchHistory;
