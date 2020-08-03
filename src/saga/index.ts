import { all, fork } from "redux-saga/effects";

import { SagaIterator } from "redux-saga";
import search from "sagas/search";

function* saga(): SagaIterator {
  yield all([fork(search)]);
}

export default saga;
