import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());

config();

const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

// connect to MongoDB
try {
  mongoose.connect(MongoDBURI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
