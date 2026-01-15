import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        businessId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        status: {
            type: String,
            enum: ["pending", "active", "completed", "cancelled"],
            default: "active",
        },
    },
    { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
