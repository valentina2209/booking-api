import express from "express";
import {
    getUsers,
    getBusinessUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/usersController.js";
import { validateId } from "../middlewares/validateId.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/business", getBusinessUsers);
router.post("/", createUser);
router.patch("/:id", validateId, updateUser);
router.delete("/:id", validateId, deleteUser);

export default router;
