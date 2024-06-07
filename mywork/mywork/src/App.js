import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';





import Header1 from './Navbar';
import Home from './Home';
import ContactUs from './ContactUs';
import About from './About';
import Service from './Service';
import Photo from './Photo';
import Blog from './Blog';
import Event from './Event';
import Registration from './Registration';
import TodoList from './TodoList';
import Footer from './Footer';
import Blogsub1 from './Blogsub1';
import Blogsub2 from './Blogsub2';
import Blogsub3 from './Blogsub3';









//import CarouselPage from './CarouselPage';












const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header1 />
        <Routes>


          <Route path='/' element={<Home />} />
          {/* <Route path='/Home' element={<Home/>}/> */}
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Photo' element={<Photo />} />
          <Route path='/Blog' element={<Blog />} />
          {/* <Route path='/Event' element={<Event/>}/> */}
          <Route path='/Registration' element={<Registration/>}/>
          <Route path='/ContactUs' element={<ContactUs />} />
          {/* <Route path='/TodoList' element={<TodoList/>}/> */}
            <Route path='/Blogsub1' element={<Blogsub1/>}/>
            <Route path='/Blogsub2' element={<Blogsub2/>}/>
            <Route path='/Blogsub3' element={<Blogsub3/>}/>
          
           
           
           



        </Routes>
       
      </BrowserRouter>
      {/* <CarouselPage/> */}
      <Footer />




    </div>


  )
}

export default App
