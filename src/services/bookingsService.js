import { Booking } from "../models/booking.js";
import { HttpError } from "../utils/HttpError.js";

export const create = (data) => Booking.create(data);

export const getByClientEmail = (email) => {
    if (!email)
        throw new HttpError(400, "Email is required to find bookings");
    return Booking.find({ userEmail: email }).populate("businessId");
};

export const update = async (id, data) => {
    const booking = await Booking.findByIdAndUpdate(id, data, {
        new: true,
    });
    if (!booking) throw new HttpError(404, "Booking not found");
    return booking;
};

export const remove = async (id) => {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) throw new HttpError(404, "Booking not found");
};
