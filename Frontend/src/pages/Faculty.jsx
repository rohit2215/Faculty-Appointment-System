import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import {AppContext} from '../context/AppContext'
const Faculty = () => {
  const {speciality} = useParams()
  const {doctors} = useContext(AppContext);
  return (
    <div>
      
    </div>
  )
}

export default Faculty
