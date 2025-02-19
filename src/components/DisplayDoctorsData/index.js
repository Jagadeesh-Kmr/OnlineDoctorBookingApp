import './index.css'

const DisplayDoctorsData = props => {
    const {doctorsData} = props
    const {name, education, specialization, experience, reviews} = doctorsData

    return (
        <>
        <li className='ddd-li'>
            <h1 className='ddd-name'>{name} <span style={{fontSize: '12px', color: '#4560db'}}>{education}</span></h1>
            <p className='hhh-exp'>Specialization: {specialization}</p>
            <p className='hhh-exp'>Experience: {experience} Yrs</p>
            <p className='hhh-exp'>Reviews: {reviews}</p>
        </li>
        </>
    )
}

export default DisplayDoctorsData