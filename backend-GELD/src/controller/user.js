import { sql } from "../../config/database.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const addUsers = async (req, res) => {
  const user = req.body;
  console.log("Added user:", user);
  try {
    const data =
      await sql`INSERT INTO users(name,email,password) VALUES(${user.name},${user.email},${user.password}) RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
