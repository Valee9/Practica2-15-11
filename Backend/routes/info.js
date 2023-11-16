import express from 'express';
import { getInfo } from '../controllers/info.js';

const router = express.Router();

// Get all clients
router.get('/', getInfo);

export default router;