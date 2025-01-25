import bcrypt from 'bcrypt'
import validator from 'validator'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctosModel.js'

// API for adding doctor
const addDoctor = async (req,res) => {
    try {
        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success: false, message: 'Missing Details'})
        }

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success: false, message: 'Please enter a valid email'})
        }

        // validating password
        if(password.length < 8) {
            return res.json({success: false, message: 'Password should be atleast 8 characters'})
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // uploading image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type: 'image'})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success: true, message: 'Doctor added successfully'})
    }catch (error) {
        console.error(error)
        res.json({success: false, message: error.message})
    }
}

// API for admin Login

const loginAdmin = async (req,res) => {
    try {
        
    } catch (error) {
        res.json({success: false, message: error.message})  
    }
}

export {addDoctor , loginAdmin}