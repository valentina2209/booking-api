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
        status: {
            type: String,
            enum: ["active", "cancelled"],
            default: "active",
        },
    },
    { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
