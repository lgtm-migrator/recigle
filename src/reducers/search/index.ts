import getSearch from "actions/getSearch";
import { reducerWithInitialState } from "typescript-fsa-reducers";

type Suggestion = {
  $: {
    data: string;
  };
};

type CompleteSuggestion = {
  suggestion: Suggestion[];
};

export type SearchState = {
  toplevel: {
    CompleteSuggestion?: CompleteSuggestion[];
  };
};

const initialState: Readonly<SearchState> = {
  toplevel: {
    CompleteSuggestion: undefined,
  },
};

const search = reducerWithInitialState(initialState).case(
  getSearch.done,
  (state, { result }) => ({ ...state, ...result })
);

export default search;
