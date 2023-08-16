// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header , Home } from './components';

import {
  Crew,
  Destinations,
  Technology,
} from "./pages"

const  App =  () => {

    return (
      <Router>

        <Header />

        <Routes  >
          <Route index  element = {<Home />} />
          <Route path="/destination" element = {<Destinations/>}  />
          <Route path="/crew" element = {<Crew />} />
          <Route path="/technology" element = {<Technology />} />

        </Routes>

      </Router>
    )
  }

export default App
