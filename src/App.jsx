import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import BaseThemeProvider from "common/themes/BaseThemeProvider/BaseThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./data/store";
import history from "./data/history";
import "typeface-roboto";
import "./styles/app.scss";

import { DEFAULT } from "common/constants/routingConstants";

// route components
import Search from "routes/Search/Search";

function App() {
  return (
    <Provider store={store}>
      <BaseThemeProvider>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={DEFAULT} component={Search} />
          </Switch>
        </ConnectedRouter>
      </BaseThemeProvider>
    </Provider>
  );
}

export default App;
