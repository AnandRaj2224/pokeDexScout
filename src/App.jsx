import React from 'react';
import Background from './components/Background';
import NavBar from './sections/NavBar'
import Wrapper from './sections/Wrapper'
import Footer from './sections/Footer'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'


function App() {
  return <div className='main-container'>
    <Background />
    <BrowserRouter>
    <div className='app'>
      <NavBar />
      <Routes>
        <Route element ={<Search />} path='/search'/>
        <Route element ={<MyList />} path='/list'/>
        <Route element ={<About />} path='/about'/>
        <Route element ={<Compare />} path='/compare'/>
        <Route element ={<Pokemon />} path='/pokemon/:id'/>
        <Route element ={<Navigate to="/pokemon/1" />} path='*'/>


      </Routes>
      <Wrapper />
      <Footer />
    </div>
    </BrowserRouter>
  </div>
}

export default App;