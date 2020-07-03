import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import history from "./history";

const middleware = [routerMiddleware(history)];

let store = configureStore({
  reducer: rootReducer,
  middleware,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers", () => {
    const newRootReducer = require("./reducers").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
