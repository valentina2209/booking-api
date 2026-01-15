import { User } from "../models/user.js";
import { ROLES } from "../constants/roles.js";
import { HttpError } from "../utils/HttpError.js";

export const getAll = () => User.find();

export const getBusiness = () =>
    User.find({ role: ROLES.BUSINESS });

export const create = (data) => User.create(data);

export const update = async (id, data) => {
    const user = await User.findByIdAndUpdate(id, data, {
        new: true,
    });
    if (!user) throw new HttpError(404, "User not found");
    return user;
};

export const remove = async (id) => {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new HttpError(404, "User not found");
};
