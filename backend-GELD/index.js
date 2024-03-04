import express from "express";
import cors from "cors";
import { user } from "./src/router/user.js";
const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", user);
// app.post("/users", async (req, res) => {
//   const data =
//     await sql`INSERT INTO users(name,email) VALUES('zoloo','zol2121@gmail.com') RETURNING *`;
//   res.send(data);
// });
// app.post("/users/createTable", async (req, res) => {
//   const data =
//     await sql`CREATE TABLE users(id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL);`;
//   res.send(data);
// });
// app.delete("/users/dropTable", async (req, res) => {
//   const data = await sql`DROP TABLE users`;
//   res.send(data);
// });
app.listen(port, () => {
  console.log(`server port ${port}`);
});
