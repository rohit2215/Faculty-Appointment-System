import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const FacultyProfile = () => {
  const {dToken,profileData,setProfileData,getProfileData} = useContext(DoctorContext)
  const {currency,backendUrl} = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  },[dToken])
  return profileData && (
    <div>
      <div>
        <div>
          <img src={profileData.image} alt="" />
        </div>
        <div>
          {/* {Faculty Info} */}
          <p>{profileData.name}</p>
          <div>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button>{profileData.experience}</button>
          </div>
          {/* {Faculty about} */}
          <div>
            <p>About:</p>
            <p>
              {profileData.about}
            </p>
          </div>
          <p>
            Appointment Fee: <span>{currency} {profileData.fees}</span>
          </p>
          <div>
            <p>Address:</p>
            <p>
              {profileData.address.line1}
              <br />
              {profileData.address.line2}
            </p>

          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Available</label>
          </div>
          <button>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default FacultyProfile
