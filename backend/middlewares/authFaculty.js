import jwt from 'jsonwebtoken'

//faculty authentication middleware
const authFaculty = (req, res, next) => {
    try {
        const {dtoken} = req.headers    
        if(!dtoken){
            return res.json({success: false, message: "Access denied, token missing"})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.body.facId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}
export default authFaculty