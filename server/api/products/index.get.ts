import { products } from "~~/server/utils/products";


export default defineEventHandler(async (event) => {
  return products
})