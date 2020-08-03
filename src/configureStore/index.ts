import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import reducer from "reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  storage,
  key: "root",
  whitelist: ["searchHistory", "site"],
};
const persistedReducer = persistReducer(persistConfig, reducer);
const configureStore = (middleware: any) => {
  const store = createStore(persistedReducer, applyMiddleware(middleware));
  const persistor = persistStore(store);

  return { persistor, store };
};

export default configureStore;
