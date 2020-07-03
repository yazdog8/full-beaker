import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./history";
import search from "routes/Search/data/search";

export default combineReducers({
  router: connectRouter(history),
  search,
});
