let items = []

export const makeUserRepoMemory = () => {
    const create = async ({ name, price, createdBy}) => {
       const id = items.length + 1
       const obj = { id, name, price, createdBy }

    items.push(obj)
    return obj
    }
    const findAll = async ({ q, orden, dir, page, Limit}) => {
        let array = [...items]
        if (q) arr = arr.finter(i =>
            i.name?.
            toLowerCase().
            includes(String(q). toLowerCase()))

            ar.sort((a, b)=> 
            (a[orden] > b[orden] ? 1 : -1) *(dir === "DESC" ? -1 :1)
            )
            const total = arr.length
            const start = (page - 1) * Limit
            const paged = arr.slice(start, start + Limit)

            return { items: paged, page, limit, total}
         
    }
    const findById = async({id}) => items.find(i => i.id === id) ?? null 

    const update = async ({ id, data }) => {
        const idx = items.findIndex( i => i.id === id)

        if (idx < 0) return null

        items[idx] = { ...items[idx], ...data }

        return items[idx]
    }
    const remove = async ({ id}) => {
        const before = items.length

        items = items.filter(i => i.id === id)
        return items.length < before
     }
     return { create, findAll, findById, update, remove }
}