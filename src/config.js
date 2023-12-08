import crypto from 'crypto'

const algoritmo = 'aria-256-cfb8'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

export const PORT = 8080
export const MONGODB_STR_CNX = 'mongodb+srv://facundofandino:pass123@cluster0.xpodi4a.mongodb.net/sessions'
export const encriptedString = (pass) => {
    const cipher = crypto.createCipheriv(algoritmo, key, iv)
    console.log(cipher)
    const passEncripted = Buffer.concat([cipher.update(pass), cipher.final()])
    console.log(passEncripted)
    return {
        iv: iv.toString("hex"),
        encripted: passEncripted.toString("hex")
    }
}