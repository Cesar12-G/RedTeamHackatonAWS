import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Navbar } from '../UI/Navbar'
import { LandingPage } from '../Pages/LandingPage';
import { Invest } from '../Pages/Invest';
import { Credits } from '../Pages/Credits';
import { Main } from '../Map/Main';
import { Login } from '../UI/Login';
import { CreateAccount } from '../UI/CreateAccount';
import { AddProperty } from '../Pages/AddProperty';
import ApiProvider from '../context/apiProvider';
import AuthProvider from '../context/authProvider';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="invest" element={<Invest />} />
              <Route path="credits" element={<Credits />} />
              <Route path="map" element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="create-account" element={<CreateAccount />} />
              <Route path="add-property" element={<AddProperty />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ApiProvider>
    </div>
  )
}

export default App
