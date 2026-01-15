import express from "express";
import {
    createBooking,
    getClientBookings,
    updateBooking,
    deleteBooking,
} from "../controllers/bookingsController.js";
import { validateId } from "../middlewares/validateId.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getClientBookings);
router.patch("/:id", validateId, updateBooking);
router.delete("/:id", validateId, deleteBooking);

export default router;
