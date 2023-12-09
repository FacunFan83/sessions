import { Router, json, urlencoded } from "express";
import { sessionRouterWeb } from "../web/session.router.web.js";
import { userRouterWeb } from "../web/users.router.web.js";

export const webRouter = Router()

webRouter.use(json())
webRouter.use(urlencoded({ extended: true }))

webRouter.use(sessionRouterWeb)
webRouter.use(userRouterWeb)

webRouter.get('/', (req, res) => {
    console.log(req.session['user'])
    if (!req.session['user']) {
    res.render('index.handlebars', {titulo: 'Sign In'})
    } else {
        res.send('ya hay un usuario conectado')
    }
})
