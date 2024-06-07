import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import vk9 from './vk9.jpg';
import N1 from './N1.jpg';
import N2 from './N2.jpg';
import N3 from './N3.jpg';
import N4 from './N4.jpg';
import N5 from './N5.jpg';
import N6 from './N6.jpg';
import N16 from './N16.jpg';
import N10 from './N10.jpg';
import N9 from './N9.jpg';
import N11 from './N11.jpg';
import N12 from './N12.jpg';

import N14 from './N14.jpg';








const Photo = () => {
  return (
   
    <div class="container text-center">
      <h3 style={{marginTop:"20px"}}>---------------------- Photo Gallery ----------------------------</h3>
    <div class="row">
      <div style={{marginTop:"20px"}} class="col">
         <img src={N1} width="350px" height="335px" />
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N2} width="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N3} width="350px" height="335px"/>
      </div>

      <div style={{marginTop:"20px"}} class="col">
         <img src={N4} width="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N5} width="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N6} width="350px" height="335px"/>
      </div>

      <div style={{marginTop:"20px"}} class="col">
         <img src={N16}idth="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N10} width="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N9} width="350px" height="335px"/>
      </div>

      <div style={{marginTop:"20px"}} class="col">
         <img src={N11} width="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N12} width="350px" height="335px"/>
      </div>
      <div style={{marginTop:"20px"}} class="col">
         <img src={N14} width="350px" height="335px"/>
      </div>

     

      
    </div>
    
  </div>
  
  
  
  )
}

export default Photo
