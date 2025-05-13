import { Request, Response } from 'express';
import {login} from "../services/user.service"


export const loginUser = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
  
    try {
      // Call the login service function
      const result = await login(email, password);
  
      if (result.error) {
        return res.status(401).json({ message: result.error });
      }
  
      return res.status(200).json({ token: result.token });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  