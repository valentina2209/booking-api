import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        userEmail: { type: String, required: true },
        businessId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

        bookingDate: { type: String, required: true },
        bookingTime: { type: String, required: true },

        status: {
            type: String,
            enum: ["pending", "active", "completed", "cancelled"],
            default: "active",
        },
    },
    { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);