import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import omdbRoutes from "./routes/omdb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api", omdbRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
