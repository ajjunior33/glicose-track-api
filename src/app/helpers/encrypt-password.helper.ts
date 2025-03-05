import {genSaltSync, hashSync} from 'bcryptjs'

async function encryptPasswod(password: string):Promise<string> {

    const salt = await genSaltSync(10)

    return hashSync(password, salt);
}

export { encryptPasswod }
