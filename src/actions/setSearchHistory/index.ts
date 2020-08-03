import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export type SetSearchHistoryPayload = {
  searchHistories: string[];
};

const setSearchHistory = actionCreator<SetSearchHistoryPayload>(
  "SET_SEARCH_HISTORY"
);

export default setSearchHistory;
