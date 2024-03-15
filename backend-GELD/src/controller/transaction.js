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
  const { name, category_img_id } = req.body;
  try {
    const data = await sql`
            INSERT INTO transaction(name,category_img) 
            VALUES (${name},${category_img_id}) 
            RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};
