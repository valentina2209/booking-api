import mongoose from "mongoose";
import { HttpError } from "../utils/HttpError.js";

export const validateId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return next(new HttpError(400, "Invalid ID"));
    }
    next();
};
