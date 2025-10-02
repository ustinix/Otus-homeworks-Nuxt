import { products } from "~~/server/utils/products";


export default defineEventHandler(async (event) => {
console.log('📦 API: Запрос на получение продуктов')
  console.log('📦 Продукты:', products)
  return products
})