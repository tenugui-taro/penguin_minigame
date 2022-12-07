import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// css
import "./index.css";
import "@fontsource/roboto";

// redux toolkit
import { Provider } from "react-redux";
import { store } from "./stores/store";

// react router
import { BrowserRouter as Router } from "react-router-dom";

// react dnd
import { AppDndProvider } from "@/plugins/dnd/AppDndProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppDndProvider>
          <App />
        </AppDndProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
