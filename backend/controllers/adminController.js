import asyncHandler from 'express-async-handler';
import generateAdminToken from '../utils/adminToken.js';
import User from '../models/userModel.js';

// @desc   Auth admin/set token
// route   POST/api/admin/login
// @access Public
const authAdmin = asyncHandler(async (req, res) => {

    const {email,password} = req.body;
    const user = await User.findOne({email})  
    if(user && (await user.matchPassword(password))){
        if (user.is_admin == "true") {
        generateAdminToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            is_admin:user.is_admin
        })
        // res.status(200).json({message:'admin login ready'})
        } else {
            res.status(401);
        throw new Error('not a admin')
        }
     }else{
        res.status(401);
        throw new Error('Invalid email or password')
     }


})



// @desc   Logout Admin
// route   POST/api/admin/logout
// @access Public
const logoutAdmin = asyncHandler(async (req, res) => {
    
    res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)
    })
    res.status(200).json({ message: ' logged out admin' });
})



export {
   authAdmin,
   logoutAdmin
};
