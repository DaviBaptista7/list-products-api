import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
 
import { HttpError} from "../../utils/HttpError.js"
import { makeUserRepoMemory } from "./user.repo.memory.js"

export const makeUserService = () => {
    const repo = mekeUserRepoMemory()

    const register = async ({ name, email, password})(=> {
        const exists = await repo. fin
    }