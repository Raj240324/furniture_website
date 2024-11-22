import React from 'react'
import './App.css'
import Hero from './Hero/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Feature from './Feature/Feature';
import SecondPage from './SecondPage/SecondPage';



const App = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <SecondPage />
    </div>
  )
}

export default App
