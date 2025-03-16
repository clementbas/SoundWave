import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      // Fetch user from the database
      const user: user | null = await user.findFirst({
        where: { email },
      });
  
      if (!user) {
        throw new Error("User not found");
      }
  
      // Check if the password is correct
      const isPasswordValid: boolean = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
  
      // Ensure JWT secret exists
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
      }
  
      // Generate JWT Token
      const token: string = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );
  
      return { token };
    } catch (error) {
      throw new Error(`Login failed: ${(error as Error).message}`);
    }
  };