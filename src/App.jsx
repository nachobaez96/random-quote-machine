import React from 'react'
import QuoteDisplay from './components/QuoteDisplay'
import Favourites from './components/Favourites'
import './style.css';

export default function App() {

  return (
    <div className="app">
      <QuoteDisplay />
      <Favourites />
    </div>
  )
}
