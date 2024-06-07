import React from 'react'
import Front1 from './Front1.jpg';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
// Assuming your logo is in the src/assets/images folder

import Carousel from 'react-bootstrap/Carousel';





const Front = () => {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div style={{ margin: "50px" }} class="col">
            <Image src={Front1} rounded />

            <div style={{ background: "blue", margin: "50px" }} class="col">

              <h2 style={{ color: "white", textAlign: "justify", paddingLeft: "30px", paddingRight: "30px" }}>OUR MISSION</h2>
              <p style={{ color: "white", textAlign: "justify", paddingLeft: "30px", paddingRight: "30px" }}>To work on personal satisfaction for the individuals who are enduring with dementia and other persistent infections. Shantiban  Service in Pune through the conveyance of clinical greatness, unprecedented assistance and sympathetic consideration, while being perceived as the forerunner in home wellbeing and hospice administrations in Pune.</p>
            </div>

          </div>
          <div style={{ margin: "50px" }} class="col">
            <h1 style={{ color: "red" }}>WELCOME TO</h1>
            <h2 style={{ color: "blue" }}>BEST & TOP SHANTIBAN OLD AGE HOME IN Nashik</h2>
            <h5 style={{ color: "black", textAlign: "justify" }}>A Senior Citizen Home is not only recognized by its high quality of service, but also for the lovable and empathetic people who offer the old people. Shantiban Old Age Home, one of the well-known Senior Citizen Homes in pune is a place where both, the services and the staff are professional Shantiban Old Age Home was started with the beautiful aim to give healthy food as well as secured shelter to deserved and needy old age home that require more care and can live in dignity. Shantiban old age home  aims to offer assisted living to all old patients and support them in Diabetic Care, Paralysis, Bed Ridden, Dementia, Alzheimer's, Schizophrenia, Coma and Post Read More… .</h5>
            <Nav.Link style={{ color: "blue", fontSize: "30px", textAlign: "justify" }} href="/Blog">Read More.....</Nav.Link>
          </div>

        </div>
      </div>

      <h1 style={{ color: "red", paddingLeft: "160px", margin: "30px" }}>WHY CHOOSE US?</h1>


      <div class="container text-center">
        <div class="row">
          <div class="col">

            <b style={{ textAlign: "justify", fontSize: "20px", paddingLeft: "30px" }}>EXPERIENCED AND SUPPORTIVE</b>

            <p style={{ textAlign: "justify", margin: "10px", paddingLeft: "55px" }}>We comprehend that not one consideration plan fits all. Daily Activities can incorporate anything from Meal preparation, Hygiene, Cleaning, and Supervision. We will carve out opportunity to get to know you and foster an individualized consideration plan that accommodates your particular necessities..</p>
          </div>
          <div class="col">

            <b style={{ textAlign: "justify", fontSize: "20px", paddingLeft: "30px" }}>CARE GIVERS YOU CAN TRUST</b>

            <p style={{ textAlign: "justify", margin: "10px", paddingLeft: "55px" }}>Feel improved in the solace of your own home. We work in care and everyday residing help to a variety of people who expected a help because of maturing, sickness, recuperation or recovery. Our parental figures will offer an individualized assistance that you can trust.

            </p>
          </div>
          <div class="col">

            <b style={{ textAlign: "justify", fontSize: "20px", paddingLeft: "30px" }}>EXPERIENCED HOME HEALTH AIDS</b>

            <p style={{ textAlign: "justify", margin: "10px", paddingLeft: "55px" }}>Friendship is a key to a confided in relationship with our consideration givers. We not just endeavor to assist you with consistently assignments however need to foster a mindful relationship with you. We give one on one consideration and care that can't think about in different settings.</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "justify", fontSize: "20px", paddingLeft: "30px", margin: "120px" }} class="foot-panel3">

        <div class="container text-center">
          <div class="row">
            <div class="col order-last">
              <b>Medical Professionals</b>
              <p>Qualified and certified doctor for qulity medical care</p>
            </div>


            <div class="col">
              <b>Complate Lab Services</b>
              <p>Cost-efficient, comprehensive and clinical laboratory services </p>

            </div>

            <div class="col order-first">

              <b>24 Hour Emergency</b>
              <p>Open round the clock for conve-nience, quick and easy access</p>

            </div>


          </div>
        </div>
      </div>


      <div style={{ textAlign: "justify", fontSize: "20px", paddingLeft: "30px" }} class="foot-panel3">

        <div class="container text-center">
          <div class="row">



            <div class="col">
              <b>EMERGENCY CALL:</b>
              <p style={{ color: "red", fontSize: "40px" }}>+919307295576 </p>
              <p style={{ color: "red", fontSize: "40px" }}>+918805549070 </p>

            </div>




          </div>
        </div>
      </div>




      <div>
        <div style={{ height: "280px", background: "purple" }}  >
          <Carousel>
            <Carousel.Item>
              <h1 style={{ color: "white", textAlign: "center", margin:"40px" }} >what our clients say</h1>
              <p style={{ color: "white", textAlign: "center" }}>Thank you from the bottom of my heart for the service you have given us..of course the way you take care of all your grandparents and patients
                Thank you so much for taking so many casts for our grandmother and fixing </p>
              <p style={{ color: "white", textAlign: "center", fontSize: "30px" }}>Om Khairnar</p>
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <h1 style={{ color: "white", textAlign: "center", margin:"40px" }} >what our clients say</h1>
              <p style={{ color: "white", textAlign: "center" }}>They take really very good care of old age people there... I visited the place and was very happy to see relation between staff and the patients...
                 </p>
              <p style={{ color: "white", textAlign: "center", fontSize: "30px" }}>Neel Deore</p>

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <h1 style={{ color: "white", textAlign: "center", margin:"40px" }} >what our clients say</h1>
              <p style={{ color: "white", textAlign: "center" }}>
              Good service we got hear in hope old age home thanks ....</p>
              <p style={{ color: "white", textAlign: "center", fontSize: "30px" }}>Rohit Patil</p>
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>

    </div>


  )
}



export default Front
