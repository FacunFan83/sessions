import express from "express"
import mongoose from "mongoose"
import { engine } from "express-handlebars"
import { MONGODB_STR_CNX, PORT } from "./config.js"
import { apiRouter } from "./routers/apirest.router.js"
import { webRouter } from "./routers/web.router.js"
import { activeSession } from "./middlewares/session.js"
import crypto from "crypto"

await mongoose.connect(MONGODB_STR_CNX)
console.log('Conectado a la base de datos')

export const app = express()

app.engine('handlebars', engine())


app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`)
})

app.use(activeSession)
app.use('/static', express.static('./static'))
app.use('/api', apiRouter)
app.use('/', webRouter)

function crearUsuario() {
    const algoritmo = 'aria-256-cfb8'
    const key = crypto.randomBytes(32)
    const iv = crypto.randomBytes(16)
}