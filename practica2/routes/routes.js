const express=require('express');
import { createuser} from "../controllers/user.js";
const router = express.Router();
router.post('/user', createuser);

export default router;