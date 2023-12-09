import { Router } from "express";
import { sessionRouterWeb } from "../web/session.router.web.js";
import { userRouterWeb } from "../web/users.router.web.js";

export const webRouter = Router()

webRouter.get('/', (req, res) => {
    res.render('login.handlebars', {titulo: 'Sign In'})
})

webRouter.use(sessionRouterWeb)
webRouter.use(userRouterWeb)