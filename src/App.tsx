import React from 'react';
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Route } from "./router/route";
import { theme } from "./theme/theme";
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import './App.css'
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={Route} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
