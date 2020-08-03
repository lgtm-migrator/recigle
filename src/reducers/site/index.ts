import { reducerWithInitialState } from "typescript-fsa-reducers";
import setSite from "actions/setSite";

type Site =
  | "ajinomoto"
  | "cookpad"
  | "delishkitchen"
  | "erecipe"
  | "kikkoman"
  | "kurashiru"
  | "lettuceclub"
  | "nadia"
  | "orangepage"
  | "rakuten"
  | "sirogohan";

export type SiteState = Record<Site, boolean>;

const initialState: Readonly<SiteState> = {
  ajinomoto: false,
  cookpad: false,
  delishkitchen: false,
  erecipe: false,
  kikkoman: false,
  kurashiru: false,
  lettuceclub: false,
  nadia: false,
  orangepage: false,
  rakuten: false,
  sirogohan: false,
};

const site = reducerWithInitialState(initialState).case(
  setSite,
  (state, payload) => ({ ...state, ...payload })
);

export default site;
