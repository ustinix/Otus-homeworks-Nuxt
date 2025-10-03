import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const productsCookie = useCookie<Product[]>('products', {
    default: () => []
  })

  const products = ref<Product[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)


  const loadFromCookie = () => {
    if (productsCookie.value && productsCookie.value.length > 0) {
      products.value = productsCookie.value
    } else {
      console.log('Список товаров пуст')
    }
  }

  const saveToCookie = () => {
    productsCookie.value = products.value
  }

  const fetchProducts = async () => {

    if (products.value.length > 0) {
      console.log('Продукты уже загружены')
      return
    }

    isLoading.value = true
    error.value = null

    try {
      const { data } = await useFetch('/api/products')

      if (data.value && data.value.length > 0) {
        products.value = data.value
        saveToCookie()
      } else {
        loadFromCookie()
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = `Ошибка при загрузке товаров: ${err.message}`
      } else {
        error.value = 'Неизвестная ошибка при загрузке товаров'
      }
      loadFromCookie()
    } finally {
      isLoading.value = false
    }
  }

  const initialize = () => {
    loadFromCookie()
    if (products.value.length === 0) {
      fetchProducts()
    }
  }

  initialize()

  return {
    products,
    isLoading,
    error,
    fetchProducts,
  }
})