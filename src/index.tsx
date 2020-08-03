import "ress";
import "./styles/global.scss";

import * as serviceWorker from "./serviceWorker";

import React, { StrictMode } from "react";

import Containers from "containers";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import configureStore from "./configureStore";
import createSagaMiddleware from "redux-saga";
import saga from "saga";

const sagaMiddleware = createSagaMiddleware();
const { persistor, store } = configureStore(sagaMiddleware);

sagaMiddleware.run(saga);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Containers />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
