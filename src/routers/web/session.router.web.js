import { Router } from "express";
import { Usuario } from "../../models/user.js";
import { encriptedString } from "../../config.js";

export const sessionRouterWeb = Router()

sessionRouterWeb.get('/login', (req, res) => {
    res.render('login.handlebars', { titulo: 'Inicio de Sesión' })
})

sessionRouterWeb.post('/login', async (req, res) => {
    const { email, password } = req.body
    const usuario = await Usuario.findOne({ email }).lean()
    const chkPwd = encriptedString(usuario.salt, password)

    if (!usuario || usuario.password != chkPwd) { return res.send('No se pudo loguear') }

    const userInfo = {
        email: usuario.email,
        nombre: usuario.nombre,
        apellido: usuario.apellido
    }

    req.session['user'] = userInfo
    res.send('Bienvenido')
})