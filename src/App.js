import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import ItemList from './Component/itemList';
import Filter from './Component/filter'

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid bg-light">
        <div className="spaceHeading">{'SpacEx Launch programs'}</div>
        <div className="row d-flex">
          <div className="col-md-3 col-sm-12"><Filter /></div>
          <div className="col-md-9 col-sm-12"><ItemList /></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
