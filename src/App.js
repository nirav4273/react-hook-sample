import React, { useReducer } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { reducer, initState } from './store/reducer';
import './App.css';

export const MainContext = React.createContext();

function App() {

  const [redux, dispatch] = useReducer(reducer,initState)
  
  return (
    <div className="App">
      {redux.counter}
      <MainContext.Provider value={{store: redux, dispatch }}>
        
        <Header/>
        <Main/>
        <Footer/>
      </MainContext.Provider>
    </div>
  );
}

export default App;
