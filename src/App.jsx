import React from "react";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store"

const App = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <Outlet/>
    </Provider>
  );
};

export default App;
