import { sql } from "../../config/database.js";
export const takeRecords = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM transaction`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};
export const addRecords = async (req, res) => {
  const { name, amount, transaction_type, description } = req.body;
  try {
    const data = await sql`
    INSERT INTO transaction(name,amount,transaction_type,description) VALUES(${name},${amount},${transaction_type},${description}) RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};
