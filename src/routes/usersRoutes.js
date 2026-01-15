import express from "express";
import {
    getUsers,
    getBusinessUsers,
    createUser,
    deleteUser,
    getUserById,
    patchUserController,
} from "../controllers/usersController.js";
import { validateId } from "../middlewares/validateId.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/business", getBusinessUsers);
router.post("/", upload.single("image"), createUser);
router.get("/:id", validateId, getUserById);
router.patch("/:id", validateId, upload.single("image"), patchUserController);
router.delete("/:id", validateId, deleteUser);


export default router;
