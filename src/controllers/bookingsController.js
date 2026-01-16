import * as bookingsService from "../services/bookingsService.js";

export const createBooking = async (req, res, next) => {
    try {
        const booking = await bookingsService.create(req.body);
        res.status(201).json(booking);
    } catch (error) {
        next(error);
    }
};

export const getClientBookings = async (req, res, next) => {
    try {
        const { email } = req.query;
        const bookings = await bookingsService.getByClientEmail(email);
        res.json(bookings);
    } catch (error) {
        next(error);
    }
};

export const updateBooking = async (req, res, next) => {
    try {
        const booking = await bookingsService.update(
            req.params.id,
            req.body
        );
        res.json(booking);
    } catch (error) {
        next(error);
    }
};

export const deleteBooking = async (req, res, next) => {
    try {
        await bookingsService.remove(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
