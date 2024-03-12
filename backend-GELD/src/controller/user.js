import { sql } from "../../config/database.js";
import bcrypt from "bcrypt";

export const addUsers = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Added user:", name, email, hashedPassword);
    const data =
      await sql`INSERT INTO users(name,email,password) VALUES(${name},${email},${hashedPassword}) RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await sql`SELECT * FROM users WHERE email = ${email}`;
    console.log(data);
    if (data.length === 0) {
      return res.status(404).send("User not found");
    }
    const isValid = await bcrypt.compare(password, data[0].password);
    if (isValid) {
      res.send(data[0]);
    } else {
      res.status(401).send("Invalid email or password");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};
export const addRecord = async (req, res) => {
  const { amount, category } = req.body;
  try {
    const data =
      await sql`INSERT INTO category(name,email,password) VALUES(${amount},${category}) RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};

export const testController = async (req, res) => {
  return res.send({ msg: "success" });
};
