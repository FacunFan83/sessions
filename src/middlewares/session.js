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
