import express from 'express'
 import { authAdmin,logoutAdmin} from '../controllers/adminController.js';

const router = express.Router();

router.post('/login',authAdmin)
router.post('/logoutAdmin',logoutAdmin)

export default router;