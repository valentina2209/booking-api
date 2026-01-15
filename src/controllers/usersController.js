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
        let photoUrl = "";

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
        const user = await usersService.update(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await usersService.remove(req.params.id);
        res.status(204).send();
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