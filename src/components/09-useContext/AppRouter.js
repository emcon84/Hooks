import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
      <Router>
          <div>
            <NavBar />
            <Routes>
                <Route extact path="/" element={ <HomeScreen/> } />
                <Route extact path="/login" element={ <LoginScreen/> } />
                <Route extact path="/about" element={ <AboutScreen />} />
                <Route  path="*" element={<Navigate replace to="/" />} />   
            </Routes>
          </div>
      </Router>
    )
}
