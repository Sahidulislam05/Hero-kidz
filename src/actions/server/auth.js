"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  try {
    const { email, password, name } = payload;
    
    if (!email || !password || !name) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    // Check if user already exists
    const usersCollection = await dbConnect(collections.USERS);
    const isExist = await usersCollection.findOne({ email });
    
    if (isExist) {
      return {
        success: false,
        acknowledged: false,
        error: "User already exists",
      };
    }

    // Hash password and create new user
    const hashedPassword = await bcrypt.hash(password, 14);
    const newUser = {
      provider: "credentials",
      name,
      email,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
    };

    // Insert new user
    const result = await usersCollection.insertOne(newUser);

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId?.toString(),
      success: true,
    };
  } catch (error) {
    console.error("Error in postUser:", error);
    return {
      success: false,
      acknowledged: false,
      error: error.message,
    };
  }
};

export const loginUser = async (payload) => {
  try {
    const { email, password } = payload;
    
    if (!email || !password) {
      return null;
    }

    const usersCollection = await dbConnect(collections.USERS);
    const user = await usersCollection.findOne({ email });
    
    if (!user) {
      return null;
    }

    const isMatched = await bcrypt.compare(password, user.password);
    
    if (isMatched) {
      return {
        _id: user._id?.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      };
    }

    return null;
  } catch (error) {
    console.error("Error in loginUser:", error);
    return null;
  }
};
