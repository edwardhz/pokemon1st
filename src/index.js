import  ReactDOM  from "react-dom/client";
import React from 'react';
import App from 'routes/App';
import 'antd/dist/reset.css';
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore,compose } from "redux";
import { logger } from "./middlewares";
import thunk from 'redux-thunk'
import dataReducer from "./slices/dataSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));


const composeAlt =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk,logger))

const store = createStore(dataReducer, composedEnhacers)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);