import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import { IndexComponent } from "./components/IndexComponent";

export default function App() {
  return (
    <Provider store={store}>
      <IndexComponent></IndexComponent>
    </Provider>
  );
}
