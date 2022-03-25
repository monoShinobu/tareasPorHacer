import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { NavBar } from './NavBar';
import { TodoApp } from '../08-useReducer/TodoApp';
import { HomeScreen } from './HomeScreen';
import { Joaco } from '../genero/joaco';


export const AppRouter = (props) => {
  return (
    <Router>
        <div>
            <NavBar />
            <Routes>
                <Route path="/gayDetector" element={ <Joaco /> } />
                <Route path="/tareas" element={ <TodoApp /> } />
                <Route path="*" element={<HomeScreen />} />
            </Routes>
        </div>
    </Router>
  )
}
