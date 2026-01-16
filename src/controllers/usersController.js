import * as usersService from "../services/usersService.js";
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";
import { User } from "../models/user.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await usersService.getAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const getBusinessUsers = async (req, res, next) => {
    try {
        const users = await usersService.getBusiness();
        res.json(users);
    } catch (error) {
        next(error);
    }
    return await User.find({ role: 'business' });
};

export const createUser = async (req, res, next) => {
    try {
        let photoUrl = req.body.image || "";

        if (req.file) {
            photoUrl = await saveFileToCloudinary(req.file);
        }

        const user = await usersService.create({
            ...req.body,
            image: photoUrl
        });

        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };

        if (req.file) {
            updateData.image = await saveFileToCloudinary(req.file);
        }

        const user = await usersService.update(id, updateData);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const patchUserController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };

        if (req.file) {
            updateData.image = await saveFileToCloudinary(req.file);
        }

        const result = await usersService.update(id, updateData);

        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            status: 200,
            message: `Successfully patched a user!`,
            data: result,
        });
    } catch (error) {
        next(error);
    }

};

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await usersService.getById(id);
        if (!user) {
            return res.status(404).json({ message: "Користувача або заклад не знайдено в базі" });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) { next(error); }
};

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) { next(error); }
};