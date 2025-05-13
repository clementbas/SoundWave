import express from 'express'
import { loginUser } from '../controllers/user.controller';

const router = express.Router()

// Login Route
router.post('/login', async (req, res) => {
    await loginUser(req, res);
  });

export default router;