import { genSaltSync, hashSync } from 'bcryptjs'

async function encryptPasswod(password: string):Promise<string> {

    const salt = await genSaltSync(10)

    const hashPassword = await hashSync(password, salt)

    return hashPassword
}

export { encryptPasswod }
