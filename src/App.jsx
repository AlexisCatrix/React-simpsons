import React from "react";
import Navbar from "./components/Navbar";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm.jsx";
import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle/>
      <Navbar />
      <QuoteForm />
      <QuoteList />
    </div>
  );
}
