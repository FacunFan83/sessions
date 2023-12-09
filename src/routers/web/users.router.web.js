import { Router } from "express";
import { Usuario } from "../../models/user.js";
import { onlyLogged } from "../../middlewares/session.js";
import { encriptedString } from "../../config.js";

export const userRouterWeb = Router()