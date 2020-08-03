import { call, cancel, delay, fork, take } from "redux-saga/effects";

import { SagaIterator } from "redux-saga";
import { bindAsyncAction } from "typescript-fsa-redux-saga";
import { fetchSearch } from "apis";
import getSearch from "actions/getSearch";
import { parseStringPromise } from "xml2js";

const searchWorker = bindAsyncAction(getSearch, { skipStartedAction: true })(
  function* (params): SagaIterator {
    yield delay(500);

    const { data }: PromiseType<ReturnType<typeof fetchSearch>> = yield call(
      fetchSearch,
      params
    );
    const result = yield call(parseStringPromise, data);

    return result;
  }
);

function* search(): SagaIterator {
  yield fork(function* () {
    let lastTask;

    while (true) {
      const { payload } = yield take(getSearch.started);

      if (lastTask) {
        yield cancel(lastTask);
      }

      lastTask = yield fork(searchWorker, payload);
    }
  });
}

export default search;
