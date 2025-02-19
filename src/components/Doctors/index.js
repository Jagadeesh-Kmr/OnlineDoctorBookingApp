import { useState} from 'react'
import { FaUserDoctor, FaBookMedical} from "react-icons/fa6"
import { FaSearch } from "react-icons/fa";
import { GiCancel} from 'react-icons/gi'
import {Link} from 'react-router-dom'

import DisplayDoctorsData from '../DisplayDoctorsData'
import Header from '../Header'
import DoctorContext from '../../context/DoctorContext'

import './index.css'
import imageUrls from '../../assests';


const Doctors = () => {
    const [patientName, setPatientName] = useState('')
    const [patientAge, setPatientAge] = useState('')
    const [gender, setGender] = useState('Male')
    const [specialization, setSpecialization] = useState('Cardiology')
    const [patientFile, setPatientFile] = useState('Male')
    const [rgErrorMsg, setRgErrorMsg] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [togglePopUPView, setTogglePopUpView] = useState(true)
    const [filteredDoctors, setFilteredDoctors] = useState([
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
    ]
  )  

/*
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getDoctorsData = async () => {
        try{
            const response = await fetch('https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:ibuprofen&limit=5')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
        const data = await response.json();
            setDoctors(data);
        } 
        catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
        getDoctorsData()
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
 */ 
    
   const RenderSearchbar = () => (
      <DoctorContext.Consumer>
        {value => {
          const {doctorDetails} = value

          const handleSearch = (e) => {
            const query = e.target.value.toLowerCase();
            setSearchTerm(query)
        
            const filtered = doctorDetails.filter((doctor) =>
              doctor.specialization.toLowerCase().includes(query)
            )
            setFilteredDoctors(filtered);
          }

          return (
            <>
             <input
              type="text"
              placeholder="Search by specialization..."
              value={searchTerm}
              onChange={handleSearch}
              className='search-input'
            />
            <FaSearch className='search-icon'/>
            </>
          )
        }}
      </DoctorContext.Consumer>
    )

    const RenderRegistration = () => (
      <DoctorContext.Consumer>
        {value => {
          const {setRegisterDetails} = value

          const handleSubmit = () => {
            if (patientName === '' || patientAge === ''){
              setRgErrorMsg("*ENTER NAME & AGE")
            } else{
              const details = {
                name: patientName,
                age: patientAge,
                gender,
                specialization,
                patientFile,
              };
              setRegisterDetails(details);
              setPatientName(''); 
              setPatientAge('');
              setGender('Male');
              setSpecialization('Cardiology');
              setShowSuccessMessage(true)
              setRgErrorMsg('')
            }
          }

          const handleFileUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
              setPatientFile(file)
            }
          }
         
          return (
            <>
            {!showSuccessMessage ? (
              <div>
                <h1 className="rg-h1">Register Below <FaBookMedical style={{ fontSize: '20px' }} /></h1>
                <img
                  src="https://www.mediterraneanpainforum.com/wp-content/uploads/2023/12/Senza-titolo-2.png"
                  alt="register"
                  className="rg-img"
                />
                <div className="sd-input-div">
                  <p className="patient-d-p">Enter Patient Details</p>
                  <label htmlFor="patientName" className="rg-label">Enter Patient Name*</label>
                  <input
                    type="text"
                    id="patientName"
                    placeholder="Name"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z\s]*$/.test(value)) {
                        setPatientName(value);
                      }
                    }}
                    value={patientName}
                    className="rg-input"
                  />
                  <div className="patient-age-div">
                    <div>
                      <label htmlFor="age" className="rg-label">Age* </label>
                      <input
                        type="text"
                        id="age"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            setPatientAge(value);
                          }
                        }}
                        value={patientAge}
                        className="rg-input age"
                      />
                    </div>

                    <div>
                      <label htmlFor="gender" className="rg-label">Gender</label>
                      <select
                        id="gender"
                        className="gender-select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>

                  <label htmlFor="specialization" className="rg-label specialization">Select specialization</label>
                  <select
                    id="specialization"
                    className="specialization-select"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  >
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Orthopedics</option>
                    <option>Psychiatry</option>
                    <option>Anesthesiology</option>
                    <option>Oncology</option>
                    <option>Family Medicine</option>
                    <option>Neurology</option>
                    <option>Surgery</option>
                    <option>Gastroenterology</option>
                    <option>Ophthalmology</option>
                    <option>Internal Medicine</option>
                    <option>Urology</option>
                  </select>

                  <label htmlFor="fileUpload"
                  className="rg-label"
                  style={{marginTop: "15px", alignSelf: "center"}}>
                  Upload File
                  </label>
                  <input
                  type="file"
                  id="fileUpload"
                  onChange={handleFileUpload}
                  className="file-upload-input"
                  />

                  <p className='rg-er-msg'>{rgErrorMsg}</p>
                  <button type="button" className="ap-link-btn"  onClick={handleSubmit}>REGISTER</button>
                </div>
              </div>
            ) : (
              
              <div className="rg-success-message-div">
                <img
                  src="https://www.mediterraneanpainforum.com/wp-content/uploads/2023/12/Senza-titolo-2.png"
                  alt="register"
                  className="rg-img"
                />
                <img 
                src={imageUrls.greenTick}
                alt="Green Tick"
                className='green-tick'
                />
                <h1 className='rg-success-h1'>Patient Details Registered!</h1>
                <p className='rg-success-p'>Thank you for registering.</p>
                <Link to="/appointment" className="link">
                <button type="button" className="link-ap-btn">
                  View Doctor's Profile
                </button>
               </Link>
              </div>
            )}
          </>
          )
        }}
      </DoctorContext.Consumer>
    )

    const RenderFilteredDoctors = () => (
      <div>
      {filteredDoctors.length > 0 ? (
        <ul className='doctors-ul'>
        {filteredDoctors.map((doctor, index) => (
          <DisplayDoctorsData key={index+doctor} doctorsData={doctor} />
        ))}
        </ul>
        ) : (
          <div className='search-er-div'>
            <img 
            src="https://cdn-icons-png.flaticon.com/512/1962/1962619.png"
            alt="error" className='error-search-img' />
            <p className='search-er-msg'>No Doctors found for the selected specialization</p>
          </div>
      )} 
      </div>
    )

    
   const onClickPopUp = () => {
    setTogglePopUpView(!togglePopUPView)
   }
   const popUpMsgClassName = togglePopUPView ? 'pop-up-bg-div' : 'pop-up-bg-dis-div'
   const popUpClassName = togglePopUPView ? 'popup-container' : 'popup-container-dis'

   const renderPopUpMsg = () => (
    <div className={`${popUpClassName} ${popUpMsgClassName}`}>
      <div className="popup-content">
        <GiCancel className="popup-close-icon" onClick={onClickPopUp} />
        <p className="popup-message">
        Complete registration to view doctor's profile.
      </p>
        <Link to="/doctors" className="popup-link">
          <button type="button" className="popup-button" onClick={onClickPopUp}>
            REGISTER
          </button>
        </Link>
      </div>
    </div>
  )


  return (
    <>
    <Header />
    <div className='doctors-main-div'>
      {renderPopUpMsg()}
      <div className='doctors-data-div'>
        <h1 className='rg-h1'>Avilable Doctors <FaUserDoctor style={{fontSize: '20px'}}/></h1>
        <div className='search-input-div'>
          {RenderSearchbar()}
        </div>
        <button type="button" className='popup-btn' onClick={onClickPopUp}>
        {RenderFilteredDoctors()}
        </button>
      </div>
      <div className='select-doctor-div'>
        {RenderRegistration()}
      </div>
    </div>
    </> 
    )
}

export default Doctors