import React from 'react'

import Blog1 from './Blog1.jpg';
import Blog2 from './Blog2.jpg';
import Blog3 from './Blog3.jpg';
import { Link } from 'react-router-dom';


const Middle = () => {
  return (
    <div>
      <div className="container text-center">
      <h1 style={{marginTop:"20px"}}>Top Elderly Home & Vrudhashram in Pune </h1>
      <p style={{marginTop:"20px"}}>
        Shantiban old age home is a home for countless retired people including our elders who have suffered from various disabilities. The Shantiban old age home is situated in Pune, Maharashtra, India and provides the best of amenities to the elderly.Shantiban old age home is an old age home in Pune which offers services to the people who are searching for a good and comfortable place. Shantiban old age home provides accommodation, food, health care, spiritual activities, etc.read our blog for info about old age pople, old age pople problems and Solution. </p>
        <div className="row">
          <div className="col">
            <div style={{width:"300px"}} class="card">
              <img src={Blog1} class="card-img-top" alt=".." />
              <div class="card-body">
                <h5 class="card-title">Selecting Old Age Home Why it iss Nececessary</h5>
                <p class="card-text">
                      Looking for an old age home can be a difficult process, but it is made easier by the staff at. This is an article about what makes an old age home a good choice.
                   
                    </p>
                <Link style={{color:"white",textDecoration:"none"}} to='/Blogsub1' a class="btn btn-primary">Read more</Link> 
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{width:"300px"}} class="card">
              <img src={Blog2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Old age problem And Solution</h5>
                <p class="card-text">
                       It is very important to provide help to people who are old and they are facing so many problems. We need old age homes where they can live and get the attention they deserve.
                    </p>
                    <Link style={{color:"white",textDecoration:"none"}} to='/Blogsub2' a class="btn btn-primary">Read more</Link> 
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{width:"300px"}} class="card" >
              <img src={Blog3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Old age Home: The Best and Top Vrudashram in Nashik</h5>
                <p class="card-text">
                     The staffs are friendly and supportive. They provide healthy food as well as secured shelter to deserved and needy old age home that require more care.
                    </p>
                    <Link style={{color:"white",textDecoration:"none"}} to='/Blogsub3' a class="btn btn-primary">Read more</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
