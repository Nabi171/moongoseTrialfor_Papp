import express from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controller";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/admins', getAdminUsers);
router.post('/create-user', createUser)

export default router;