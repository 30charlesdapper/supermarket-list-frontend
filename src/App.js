// import {useState, useEffect} from "react";
// import { ListCard } from './components/ListCard';

import './App.css';
import { HomeScreen, ListScreen } from './screems';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/list' element={<ListScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App;