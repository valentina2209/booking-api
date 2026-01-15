import { Booking } from "../models/booking.js";
import { HttpError } from "../utils/HttpError.js";

export const create = (data) => Booking.create(data);

export const getByClient = (clientId) => {
    if (!clientId)
        throw new HttpError(400, "clientId is required");
    return Booking.find({ clientId }).populate("businessId");
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
