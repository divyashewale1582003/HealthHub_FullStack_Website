import React from 'react';

import living from './image/living.jpg'
import hospital from './image/hospital.jpg'
import Ambulance from './image/Ambulance.jpg'
import Social from './image/Social.jpg'
import meal from './image/meal.jpg'
import Nursing from './image/Nursing.jpg'
import Pathology from './image/Pathology.jpg'
import Equipment from './image/Equipment.jpg'
import care from './image/care.jpg'
import Routine from './image/Routine.jpg'

const services = [
  {
    id: 1,
    title: 'Assisted Living',
    description: 'Our trained staff assists residents with daily activities, ensuring a comfortable living experience.',
    serimg: living
  },
  {
    id: 2,
    title: 'Medical Care',
    description: 'We prioritize the health of our residents by providing regular medical check-ups and assistance with medications.',
    serimg :care
  },
  {
    id: 3,
    title: 'Social Activities',
    description: 'We organize various social and recreational activities to keep our residents engaged and foster a sense of community.',
    serimg :Social
  },
  {
    id: 4,
    title: 'Meal Services',
    description: 'Our kitchen staff prepares nutritious and delicious meals to meet the dietary needs of our residents.',
    serimg :meal
  },
  {
    id: 5,
    title: '24 Hours Nursing Assistant',
    description: 'Our care plans are specially crafted in catering to individual healthcare needs.With a dedicated Manager assigned,who ensures all your healthcare needs are taken care of,be rest assured.Through this plan we also assist you with services such as Doctor visits,Diagnostic services,Nurse,Trained attendants',
    serimg :Nursing
  },
  {
    id: 6,
    title: 'Ambulance service',
    description: 'We provide 24/7 best Ambulance services with best facilities to our clients.These services are provided by our team of professionals in accordance',
    serimg :Ambulance
  },
  {
    id: 7,
    title: 'Medical Equipments',
    description: 'Getting medical equipment on rent or purchase at your doorstep has never been this convenint.Surgical bed,air,bed,bedpan,urine pot,cotton roll,hand gloves.',
    serimg :Equipment
  },
  {
    id: 8,
    title: 'Hospital tie up in case of Emergency',
    description: '24 hrs helpline available in case of emergency.Our Ambulance would take you to the nearby hospital',
    serimg :hospital
  },
  {
    id: 9,
    title: 'Pathology Lab available',
    description: 'We will provide you complete health checkup packages and individual lab tests for you and your family.',
    serimg :Pathology
  },
  {
    id: 10,
    title: 'Routine medical checkup',
    description: 'Our qualified,specialized and experienced team of doctors maintains daily vital readings of the residents and assess,diagnose and treat them as per need.',
    serimg :Routine
   
  },
];

const Services = () => {
  return (
    <div className="services-page">
      {/* <img src={service} alt="service image" height={500} width={1200} /> */}
     
      <h1>Our Services</h1>
      <div className="services-container">
        {
          services.map(service => (
            <>

              <div key={service.id} className="service-card">
                <img src={service.serimg}  className="service-image" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </>
          ))}
      </div>
    
    
    
    </div>
    
   
  );
}

export default Services;