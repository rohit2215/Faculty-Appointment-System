import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [doctors, setDoctors] = useState([])
    const [appointments,setAppointments] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const getAllDoctors = async () => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/all-doctors',{}, {headers:{aToken}})
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors);
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const changeAvailability = async (docId) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const getAllAppointments = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/admin/appointments',{headers:{aToken}})
            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments);
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}})
            console.log(data);
            if(data.success){
                toast.success(data.message)
                getAllAppointments()
            }else{
                toast.error(data.message)
                console.log(data.message);
                
            }
        } catch (error) {
            if (error.response) {
                // The request was made, but the server responded with a status code outside the range of 2xx
                console.log("Server Error:", error.response.data);
                toast.error(error.response.data.message || "Something went wrong");
            } else if (error.request) {
                // The request was made but no response was received
                console.log("Network Error:", error.request);
                toast.error("Network error, please try again");
            } else {
                // Something happened while setting up the request
                console.log("Axios Error:", error.message);
                toast.error(error.message);
            }
        }
    }
    const value = {
        aToken, setAToken,
        backendUrl,doctors,
        getAllDoctors,changeAvailability,
        appointments,setAppointments,
        getAllAppointments,
        cancelAppointment
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider