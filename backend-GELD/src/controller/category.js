import { sql } from "../../config/database.js";
export const takeCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM category`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};
export const addCategory = async (req, res) => {
  const { name, category_img_id } = req.body;
  try {
    const data = await sql`
            INSERT INTO category(name,category_img) 
            VALUES (${name},${category_img_id}) 
            RETURNING *`;
    res.status(201).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "server error" });
  }
};
