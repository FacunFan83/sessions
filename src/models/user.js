import mongoose from "mongoose";
import { randomUUID } from "crypto"

const coleccion = 'Usuarios'

const usuarioSchema = new mongoose.Schema ({
    _id: { type: String, default: randomUUID },
    email: { type: String, require: true },
    password: { type: String, require: true },
    nombre: { type: String, require: true },
    apellido: { type: String, require: true }
}, {
    strict: 'throw',
    versionKey: false
})

export const Usuario = mongoose.model(coleccion, usuarioSchema)