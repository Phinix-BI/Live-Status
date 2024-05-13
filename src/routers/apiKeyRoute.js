import express from 'express';
import { getAPiKey } from '../controllers/apiKey.controller.js';

const router = express.Router();

router.get('/user/get/apiKey',getAPiKey);

    
export default router;