import { getProductById } from "~~/server/utils/products";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const product = getProductById(parseInt(id!))

    if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    })
  }

  return product
})