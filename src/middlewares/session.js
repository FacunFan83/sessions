import session from 'express-session'
import connectMongo from 'connect-mongo'
import { MONGODB_STR_CNX } from '../config.js'

const db = connectMongo.create({
    mongoUrl: MONGODB_STR_CNX,
    ttl: 60
})

export const activeSession = session({
    db,
    secret: 'SecretCoder',
    resave: true,
    saveUninitialized: true
})

export function onlyLogged (req, res, next) {
    if (!req.session['user']) {
        return res.status(400).json({status: 'Error', message: 'Inicie Sesión'})
    }
    next()
}