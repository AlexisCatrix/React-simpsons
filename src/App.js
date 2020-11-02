import React from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import "./App.css";
import './QuoteForm.css';
import './resetCSS.css';
import QuoteForm from './components/QuoteForm';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteList/>
      <QuoteForm/>
    </div>
  );
}

export default App;
