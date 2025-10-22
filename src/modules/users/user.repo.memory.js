{let users = [] // TODO: MIgrar para DB

export const makeUserRepoMemory = () => {
    const create = async ({ name, email, passwordHash}) => {
        const id = users.length + 1
        const user = {id, name, passwordHash}
        users.push(user)
        return user
    }

    const findByEmail = async (email) => {
        return
    }
    
}}