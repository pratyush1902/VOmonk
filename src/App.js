import React from 'react'
 
import{
   Routes,Route
} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Upload from './Components/Uplaod';
import Videos from './Components/Videos';

export default function App() {
  return (
    <div>
     <Header/>
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/upload' element={<Upload/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
    

    </div>
     
  )
}
