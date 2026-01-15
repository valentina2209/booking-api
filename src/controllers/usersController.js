import * as usersService from "../services/usersService.js";

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
};

export const createUser = async (req, res, next) => {
    try {
        const user = await usersService.create(req.body);
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
