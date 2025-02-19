import React from 'react'

const DoctorContext = React.createContext({
    setRegisterDetails: () => {},
    rgDetails: []
});

export default DoctorContext;