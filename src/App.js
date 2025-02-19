import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

import Home from './components/Home'
import Login from './components/Login'
import Doctors from './components/Doctors'
import Appointment from './components/Appointment';
import Payment from './components/Payment';
import ProtectedRoute from './components/ProtectedRoute'
import DoctorContext from './context/DoctorContext';




const App = () => {
  const [registrationDetails, setRegistrationDetails] = useState(null);
  const [doctorDetails] = useState([
    {
      name: "Dr. John Smith",
      education: "MBBS, MD-Cardiology",
      experience: 15,
      reviews: 4.8,
      specialization: "Cardiology",
      previousPatientReviews: [
        "Dr. Smith was very professional and attentive.",
        "His explanations were clear and easy to understand.",
        "The treatment plan was effective and well thought out.",
        "I highly recommend Dr. Smith for cardiac issues."
      ],
    },
    {
      name: "Dr. Sarah Johnson",
      education: "MBBS, MD-Dermatology",
      experience: 10,
      reviews: 4.5,
      specialization: "Dermatology",
      previousPatientReviews: [
        "Dr. Johnson made me feel at ease during the consultation.",
        "Her recommendations significantly improved my skin condition.",
        "The clinic was well-maintained and hygienic.",
        "Dr. Johnson was patient and answered all my questions."
      ],
    },
    {
      name: "Dr. Emily Davis",
      education: "MBBS, MS-Orthopedics",
      experience: 12,
      reviews: 4.7,
      specialization: "Orthopedics",
      previousPatientReviews: [
        "Dr. Davis is excellent at diagnosing orthopedic issues.",
        "My recovery after surgery was smooth thanks to her care.",
        "She was thorough and professional throughout the treatment.",
        "Highly knowledgeable and approachable."
      ],
    },
    {
      name: "Dr. Michael Brown",
      education: "MBBS, MD-Psychiatry",
      experience: 8,
      reviews: 4.6,
      specialization: "Psychiatry",
      previousPatientReviews: [
        "Dr. Brown is a compassionate and understanding psychiatrist.",
        "I felt heard and supported during my sessions.",
        "His approach to mental health treatment is highly effective.",
        "Dr. Brown created a safe and welcoming environment."
      ],
    },
    {
      name: "Dr. David Wilson",
      education: "MBBS, MD-Anesthesiology",
      experience: 9,
      reviews: 4.4,
      specialization: "Anesthesiology",
      previousPatientReviews: [
        "Dr. Wilson ensured I was comfortable before surgery.",
        "He explained the procedure clearly and answered all my concerns.",
        "The anesthesia process was smooth and painless.",
        "Dr. Wilson's professionalism put me at ease."
      ],
    },
    {
      name: "Dr. Laura Martinez",
      education: "MBBS, MD-Oncology",
      experience: 14,
      reviews: 4.9,
      specialization: "Oncology",
      previousPatientReviews: [
        "Dr. Martinez provided exceptional care during my treatment.",
        "Her expertise in oncology is unmatched.",
        "She was always available to address my concerns.",
        "Dr. Martinez's positive attitude gave me hope and strength."
      ],
    },
    {
      name: "Dr. Andrew Scott",
      education: "MBBS, MD-Family Medicine",
      experience: 11,
      reviews: 4.6,
      specialization: "Family Medicine",
      previousPatientReviews: [
        "Dr. Scott is attentive and takes the time to listen.",
        "He provides personalized care for the entire family.",
        "The clinic environment is welcoming and professional.",
        "Dr. Scott's treatment plans are effective and easy to follow."
      ],
    },
    {
      name: "Dr. Julia Carter",
      education: "MBBS, MD-Neurology",
      experience: 16,
      reviews: 4.8,
      specialization: "Neurology",
      previousPatientReviews: [
        "Dr. Carter is a highly skilled neurologist.",
        "She accurately diagnosed and treated my condition.",
        "Her compassionate care made a big difference in my recovery.",
        "Dr. Carter is approachable and very knowledgeable."
      ],
    },
    {
      name: "Dr. Robert Harris",
      education: "MBBS, MS-General Surgery",
      experience: 20,
      reviews: 4.9,
      specialization: "Surgery",
      previousPatientReviews: [
        "Dr. Harris is an exceptional surgeon with great expertise.",
        "My surgery and recovery went seamlessly under his care.",
        "He kept me informed throughout the entire process.",
        "I highly recommend Dr. Harris for any surgical needs."
      ],
    },
    {
      name: "Dr. Olivia White",
      education: "MBBS, MD-Gastroenterology",
      experience: 13,
      reviews: 4.7,
      specialization: "Gastroenterology",
      previousPatientReviews: [
        "Dr. White is thorough and attentive to patient needs.",
        "Her diagnosis and treatment plan were spot on.",
        "She made me feel comfortable during the procedures.",
        "I am very satisfied with the care provided by Dr. White."
      ],
    },
    {
      name: "Dr. Sophia Turner",
      education: "MBBS, MD-Ophthalmology",
      experience: 10,
      reviews: 4.5,
      specialization: "Ophthalmology",
      previousPatientReviews: [
        "Dr. Turner is excellent at diagnosing eye conditions.",
        "Her treatment plan improved my vision significantly.",
        "She is patient and explains everything in detail.",
        "Dr. Turner provides top-notch care and expertise."
      ],
    },
    {
      name: "Dr. Benjamin Lee",
      education: "MBBS, MD-Internal Medicine",
      experience: 7,
      reviews: 4.3,
      specialization: "Internal Medicine",
      previousPatientReviews: [
        "Dr. Lee is a dedicated and skilled physician.",
        "His diagnosis was accurate and treatment effective.",
        "I appreciate his thorough and detailed approach.",
        "Dr. Lee always prioritizes patient well-being."
      ],
    },
  ])


  const setRegisterDetail = registeredDetails => (
    setRegistrationDetails(registeredDetails)
  )

  return (
    <DoctorContext.Provider
    value={{
      setRegisterDetails: setRegisterDetail,
      registrationDetails,
      doctorDetails,
    }}
  >
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/doctors" element={<ProtectedRoute><Doctors /></ProtectedRoute>} />
          <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </DoctorContext.Provider>
  )
}

export default App;
