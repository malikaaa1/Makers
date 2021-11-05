import React from 'react';
import DocumentationContextProvider from './context/DocumentationContext';
import Routes from './Routes';
import User from './components/User/User'
import './App.css'



const App = () => {
  return (                             
    <DocumentationContextProvider>
      <User/>  
      <Routes/>
    </DocumentationContextProvider>
  );
};

export default App;
