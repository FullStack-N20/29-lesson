import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRoutes from "../src/routes/mainRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Use API routes
app.use("/api", mainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
