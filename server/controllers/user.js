import bcrypt from "bcryptjs"; // Encryption for user data
import jwt from "jsonwebtoken"; // Safe way to store the user in a browser

import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Retrieve user from database
    const existingUser = await User.findOne({ email });

    // If no user is found with that email, return error
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    // Compare encrypted password to password attempt
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    // If the password is wrong, return bad request
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password." });

    // Generate token for user session
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test", // REPLACE WITH ENV SECRET!
      { expiresIn: "1h" }
    );

    // Send token to the front end
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    // If a user is found with that email, return error
    if (existingUser)
      return res.status(404).json({ message: "User does not exist." });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Passwords do not match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
