import { useState, useContext } from "react";
import {Link} from 'react-router-dom'

import { CgProfile } from "react-icons/cg"

import Header from '../Header';
import DoctorContext from '../../context/DoctorContext';

import imageUrls from "../../assests";

import './index.css';

const Appointment = () => {
  const {registrationDetails, setRegisterDetails} = useContext(DoctorContext)

const RenderRegistration = () => {
    return (
    <DoctorContext.Consumer>
      {value => {
        const { registrationDetails, doctorDetails } = value;

        const selectedDoctorDetails = doctorDetails.filter((doctor) => (
          doctor.specialization === registrationDetails.specialization
        ))

        const allPreviousReviews = selectedDoctorDetails.map(
          (doctor) => doctor.previousPatientReviews
        )
        
        const patientReviews = allPreviousReviews.flat()
              
        return (
          <>
          <div className='ap-details-div'>
            <img
            src="https://taglineinfotech.com/wp-content/uploads/2022/01/on-demand-doctor-app.webp"
            alt="dc-ap"
            className='ap-img'
            />

            <div className='dc-details-div'>
            <h1 className='ap-details-h1'> Doctor Profile</h1>
            {selectedDoctorDetails.map((doctorDtls, index) => (
              <ul key={index+doctorDetails.name} className='doctor-ul'>
              <h2 className='ap-details-p'><strong>Name:</strong> {doctorDtls.name}<span style={{fontSize: '14px', color: '#4560db', marginLeft: '10px'}}>{doctorDtls.education}</span></h2>
              <p className='ap-details-p'><strong>Review:</strong> {doctorDtls.reviews}</p>
              <p className='ap-details-p'><strong>Experience:</strong> {doctorDtls.experience} yrs</p>
              <p className='ap-details-p'><strong>Specialization:</strong> {doctorDtls.specialization}</p>
              </ul>
            ))}
            </div>

            <div>
            <h1 className='ap-details-h1' style={{color: '#f94a4a'}}> Patient Details</h1>
            <h2 className='ap-details-p'><strong>Name:</strong> {registrationDetails.name}</h2>
            <p className='ap-details-p'><strong>Age:</strong> {registrationDetails.age}</p>
            <p className='ap-details-p'><strong>Gender:</strong> {registrationDetails.gender}</p>
            <p className='ap-details-p'><strong>Selected Specialization:</strong> {registrationDetails.specialization}</p>      
            </div>
          </div>

          <div className='patient-reviews-main-div'>
            <h1 className='pt-rv-h1'>Recent Patient Reviews</h1>
            <ul className='pt-rv-ul'>
              {patientReviews.map((eachReview, index) => (
                <div className="pt-rv-div">
                <CgProfile className="prfoile-icon"/>
                <li className='pt-rv-li' key={eachReview + index}>{eachReview}</li>   
                </div>
              ))}
            </ul>
          </div>
           </>
        )
      }}
    </DoctorContext.Consumer>
  )
}

const RenderBookAppointment = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const currentHour = new Date().getHours();
  const timeSlots = ["08 AM", "10 AM", "12 PM", "03 PM", "10 PM"];

  const convertTo24Hour = (time) => {
    const [hours, modifier] = time.split(" ");
    let [hour] = hours.split(":");
    if (modifier === "PM" && hour !== "12") {
      hour = parseInt(hour) + 12;
    }
    if (modifier === "AM" && hour === "12") {
      hour = 0;
    }
    return hour;
  }

  const handleTimeClick = (time) => {
    setSelectedTime(time)
  }

  const onClickBook = () => {
    if (registrationDetails) {
      const bookingDetails = {
        ...registrationDetails,
        timeSlot: selectedTime,
      };
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      setRegisterDetails('');
    } else {
      console.log("No registration details available to store.");
    }
  }

  return (
    <div className="ap-bk-main-div">
      <h1 className="av-sl-h1">Available Slots Today</h1>
      <ul className="av-time-ul">
        <div className="time-li-div">
        {timeSlots.map((time) => {
          const isAvailable = convertTo24Hour(time) > currentHour;
          return (
            <li
              key={time}
              className={`time-li ${
                selectedTime === time ? "selected-time" : ""
              }`}
              onClick={() => isAvailable && handleTimeClick(time)}
              style={{
                backgroundColor:
                  selectedTime === time
                    ? "#6e85eb"
                    : isAvailable
                    ? "transparent"
                    : "#ff4d4d",
                color:
                  selectedTime === time
                    ? "#fff"
                    : isAvailable
                    ? "#6e85eb"
                    : "#fff",
                cursor: isAvailable ? "pointer" : "not-allowed",

                border: isAvailable ? "2px solid #6e85eb" : "2px solid #ff4d4d",
              }}
            >
              {time}
            </li>
          )
        })}  
        </div> 
      {selectedTime && (
        <div className="pay-button-container">
          <Link to="/payment" className="link">
            <button type="button" className="pay-link-btn" onClick={onClickBook}>
              Book
            </button>
          </Link>
        </div>
      )}
      </ul>
    </div>
  )
}

if (!registrationDetails) {
  return (
  <>
  <Header />
  <div className="ap-main-div">
    <div className="ap-error-div">
    <img
    src={imageUrls.noData}
    alt="no data"
    className="no-data-img" 
    />
    
    <h1 className="no-data-p">Nothing to show here! Let's get you registered.</h1>
    <Link to="/doctors" className="link">
    <button type="button" className="link-ap-btn">
      REGISTER
    </button>
    </Link>
    </div>
  </div>
  </>
  )
}

  return (
    <>
      <Header />
      <div className="ap-main-div">
        <h1 className='ap-main-h1'>You're just one step away! Book your appointment today.</h1>
        {RenderRegistration()}
        {RenderBookAppointment()}
      </div>
    </>
  )
}

export default Appointment;
