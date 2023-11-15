import express from 'express';
import { getDataInfo } from '../controllers/info.js';

const router = express.Router();

// Get all clients
router.get('/api/profile', getDataInfo);