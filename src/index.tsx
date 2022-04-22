import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MUI_THEME, THEME } from "assets/theme/setupTheme";
import store from "configStore";
import LocaleProvider from "utils/localeProvider/LocaleProvider";
import * as serviceWorker from "./serviceWorker";
import { StylesProvider } from "@material-ui/styles";
import Firebase from "./firebase/Firebase";
import {
  ExtendedStringifyOptions,
  QueryParamProvider,
  transformSearchStringJsonSafe,
} from "use-query-params";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

const queryStringifyOptions: ExtendedStringifyOptions = {
  transformSearchString: transformSearchStringJsonSafe,
};

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <LocaleProvider>
        <StylesProvider injectFirst>
          <ThemeProvider theme={THEME}>
            <MuiThemeProvider theme={MUI_THEME}>
              <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                  <QueryParamProvider
                    ReactRouterRoute={Route}
                    stringifyOptions={queryStringifyOptions}
                  >
                    <Firebase>
                      <App />
                    </Firebase>
                  </QueryParamProvider>
                </BrowserRouter>
              </SnackbarProvider>
            </MuiThemeProvider>
          </ThemeProvider>
        </StylesProvider>
      </LocaleProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
