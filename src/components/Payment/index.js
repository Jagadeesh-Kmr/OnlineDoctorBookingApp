import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../Header';

import './index.css';
import imageUrls from '../../assests';

const Payment = () => {
  const [patientDetails, setPatientDetails] = useState(null);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const storedDetails = localStorage.getItem('bookingDetails');
    if (storedDetails) {
      setPatientDetails(JSON.parse(storedDetails));
    }
  }, []);

  const handleRemoveData = () => {
    localStorage.removeItem('bookingDetails');
    setPatientDetails(null);
    alert('Patient details have been removed.');
    navigate('/doctors');
  };

  const handlePay = () => {
    setAppointmentBooked(true);
    localStorage.removeItem('bookingDetails');
    setTimeout(() => {
      navigate('/')
    }, 5000);
  };

  if (!patientDetails) {
    return (
      <>
        <Header />
        <div className="payment-main-div">
          <div className="payment-error-div">
            <img
            src={imageUrls.noData}
              alt="no-data"
              className="no-data-img"
            />
            <h1 className="no-data-p">Oops! No slot booked. Please book your slot to proceed.</h1>
            <Link to="/appointment" className="link">
              <button type="button" className="link-ap-btn">
                Book Your Slot
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="payment-main-div">
        {appointmentBooked ? (
          <div className="appointment-success">
            <img
              src={imageUrls.success}
              alt="success"
              className="success-icon"
            />
            <h1>Your Appointment Has Been Successfully Booked!</h1>
            <p>Thank you for your payment. You will be redirected shortly.</p>
          </div>
        ) : (
          <>
          <h1 className="payment-h1">Finalize Your Appointment Booking. Make Payment!</h1>
          <div className="patient-details">
            <h1 className='patient-py-h1'>Patient Details</h1>
            <p>
            <strong>Patient Name:</strong> {patientDetails.name}
            </p>
            <p>
            <strong>Age:</strong> {patientDetails.age}
            </p>
            <p>
            <strong>Gender:</strong> {patientDetails.gender}
            </p>
            <p>
            <strong>Selected Specialization:</strong> {patientDetails.specialization}
            </p>
            <div className='pay-btn-div'>
            <button className="pay-btn" onClick={handlePay}>Pay</button>
            <button className="remove-btn" onClick={handleRemoveData}>Cancel</button>
            </div>
        </div>
        </>
        )}
      </div>
    </>
  )
}

export default Payment
