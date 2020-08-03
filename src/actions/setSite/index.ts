import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

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

export type SetSitePayload = Record<Site, boolean>;

const setSite = actionCreator<SetSitePayload>("SET_SITE");

export default setSite;
