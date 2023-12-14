import express from 'express';

import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    UpdateUserProfile
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(getUserProfile).put(UpdateUserProfile)

export default router;