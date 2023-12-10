import crypto from 'crypto'

export const PORT = 8080
export const MONGODB_STR_CNX = 'mongodb+srv://facundofandino:pass123@cluster0.xpodi4a.mongodb.net/sessions'
export const MONGODB_STR_SESSION = 'mongodb+srv://facundofandino:pass123@cluster0.xpodi4a.mongodb.net/?retryWrites=true&w=majority'
export function createSalt () {
    return crypto.randomBytes(128).toString('base64')
}

export const encriptedString = (salt, pass) => {
    return crypto.createHmac('sha256', salt).update(pass).digest('hex')
}
