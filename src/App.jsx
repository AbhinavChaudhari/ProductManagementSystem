// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store,persistor } from './redux/store';
import Home from './pages/Home';
import ProductPage from './pages/product/ProductPage';
import ProductFormPage from './pages/product/ProductFormPage';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/products" Component={ProductPage} />
            <Route exact path="/products/add" Component={ProductFormPage}/>
          </Routes>
        </div>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
