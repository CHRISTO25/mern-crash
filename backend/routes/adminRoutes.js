import express from 'express'
 import { authAdmin,logoutAdmin,sendUsersData,changeIsAdmin} from '../controllers/adminController.js';

const router = express.Router();

router.post('/login',authAdmin)
router.post('/logoutAdmin',logoutAdmin)
router.get('/users',sendUsersData)
router.post('/changeIsAdmin',changeIsAdmin)


export default router;