import "dotenv/config";
import express from "express";
import cors from "cors";
import usersRouter from "./routes/usersRoutes.js";
import bookingsRouter from "./routes/bookingsRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import mongoose from "mongoose";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/bookings", bookingsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT} and DB connected`));
    })
    .catch(err => console.error("Could not connect to MongoDB", err));

export default app;
