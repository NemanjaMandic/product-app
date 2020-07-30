import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "../state/reducers";
import mySaga from "../state/sagas";

export default function configureStore() {
  const logger = createLogger({});
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middleware));

  sagaMiddleware.run(mySaga);

  return store;
}
