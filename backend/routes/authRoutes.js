import express from 'express';
import { signup, login, logout, checkAuth } from '../controllers/authController.js';
import protectedRoute from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/check-auth', protectedRoute, checkAuth);

export default router;
