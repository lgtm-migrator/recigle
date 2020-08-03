/// <reference types="react-scripts" />

type PromiseType<T extends Promise<any>> = T extends Promise<infer P>
  ? P
  : never;

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_BASE_URL: string;
  }
}
