import axios, { AxiosResponse } from "axios";

const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export type SearchParams = {
  q: string;
};

export type SearchData = string;

export const fetchSearch: (
  params: SearchParams
) => Promise<AxiosResponse<SearchData>> = (params) =>
  instance.get("/search", {
    params,
  });
