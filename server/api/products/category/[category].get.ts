import { getProductsByCategory } from '~~/server/utils/products'

export default defineEventHandler(async (event) => {
  const category = getRouterParam(event, 'category')
  const products = getProductsByCategory(category!)

  return products
})