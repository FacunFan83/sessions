import { Router } from "express";
import { Usuario } from "../../models/user.js";

export const sessionRouterWeb = Router()

sessionRouterWeb.post('/login', async (req, res) => {

    const { email, password } = req.body
    
    const usuario = await Usuario.findOne({ email }).lean()


    if (!usuario || usuario.password != password) {
        return res.status(400).json({ status: 'Error', message: 'Error al iniciar sesión' })
    }

    const userInfo = {
        email: usuario.email,
        nombre: usuario.nombre,
        apellido: usuario.apellido
    }

    req.session['user'] = userInfo
    res.status(201).json({ status: 'Success', message: 'Usuario Loguedao' })
})