import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    // Fetch user from the database
    const user: user | null = await user.findFirst({ where: { email } });

    if (!user) {
      return { error: "Invalid email or password" }; // More generic
    }

    // Check if the password is correct (async version)
    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid email or password" };
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
    console.error("Login failed:", error);
    return { error: "Login failed. Please try again." }; // Less specific error
  }
};
