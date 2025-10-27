import { HttpError } from "../../utils/httpError.js";
import { makeProductRepoMemory } from "./product.repo.memory.js";

export const makeProductService = () => {
    const repo = makeProductRepoMemory()
    const sortable = ["id", "name", "price"]
    const dirOk = ["ASC", "DESC"]

    const create = async ({ name, price, userId }) => {
        if (!name || typeof price !== "number" || price < 0) {
            throw new HttpError(
                "Invalid product payload",
                400,
                "BAD-REQUEST"
            )
        }
        return repo.create({ name, price, createBy: userId })
    }
    const list = async ({ q, order = "id", dir = "ASC", page = 1, Limit = 10 }) => {
        if (!sortable.includes(order)) order = "id"

        if (!dirOk.includes(Streing(dir).toUpperCase())) dir = "ASC"
        return repo.findAll({
            q, order, dir, page: Number(page), limit: Number(limit)
        })
    }
    const get = async ({ id }) => {
        const found = await repo.findById({ id })

        if (!found) {
            throw new HttpError(
                "Product not found",
                404,
                "NOT_FOUND"
            )
        }
        return found
    }

    const patch = async ({ id,data }) => {
        const updated = await repo.update({ id,data })

        if (!updated) {
            throw new HttpError(
                "Product not found",
                404,
                "NOT_FOUND"
            )
        }
        return updated
    }
    const remove = async ({ id }) => {
        const ok = await repo.findById({ id })

        if (!ok) {
            throw new HttpError(
                "Product not found",
                404,
                "NOT_FOUND"
            )
        }
    }

    return {create,list,get,patch,remove}
}