import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
       
    
       <div style={{color:"white",background:" rgb(80,70,70)"}} class="foot-panel3">
        
         <div  class="container text-center">
           <div class="row">
             <div class="col order-last">
               <h5 style={{margin:"50px"}}>Our Hospital </h5> 
               
              <p>Address: 13, Bllomfield Ap., Nashik, Maharashtra</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: healthub@hospital.com</p>
     
             </div>
             <div class="col">
               <h5 style={{margin:"50px"}}>Quick Links</h5> 
               
               <ul>
               <li><a href="#Home.jsx">Home</a></li>
              <li><a href="#About.jsx">About</a></li>
              <li><a href="#Service.jsx">Services</a></li>
              <li><a href="#Blog.jsx">Blog</a></li>
              <li><a href="#ContactUs.jsx">Contact</a></li>
              </ul>
             </div>
             <div class="col order-first">
               <h5 style={{margin:"50px"}}>CORPORATE OFFICE </h5> 
               <p>  A-16 lane, Dadar, Mumbai, Maharashtra 422009</p>
               <p>  techhealthhub2@gmail.com</p>
               <p>+91 9999999999</p>
             </div>
           </div>
         </div>
       </div>
     
     
     
     
     
     
     
     
     
       <div style={{textAlign:"center", background:" rgb(80,70,70)", height:"100px", color:"white"}} class="foot-panel4">
          
           <div  class="copyright">
             <p >© 2024, Made by HealthHub with From Nashik</p>
           </div>
       </div>
     
     
     </footer>
    </div>
  )
}

export default Footer
