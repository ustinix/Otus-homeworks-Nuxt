<script setup lang="ts">
import type {Product} from '../types/product'

interface Props {
  product: Product;
}
defineProps<Props>()

const truncateDescription = (description: string, maxLength: number = 100): string => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength) + '...';
}

const addToCart = (product: Product) => {
  console.log('Добавлено в корзину:', product);
}

const viewDetails = (product: Product) => {
  navigateTo(`/product/${product.id}`)
}
</script>
<template>
  <q-card class="product-card" flat bordered>
      <q-img
      :src="product.image"
      :alt="product.title"
      class="product-image"
      :ratio="1"
    />
      <q-card-section class="q-pt-none">
        <div class="text-h6 text-weight-bold product-title ellipsis-2-lines">
          {{ product.title }}
        </div>
        <div class="text-caption text-grey q-mt-xs product-category">
        {{ product.category }}
      </div>

        <div class="q-mt-sm">
        <q-rating
          :model-value="product.rating.rate"
          :max="5"
          size="20px"
          color="orange"
          readonly
        />
        <span class="text-caption text-grey q-ml-sm">
          ({{ product.rating.count }})
        </span>
      </div>
      <div class="text-body2 q-mt-md product-description">
        {{ truncateDescription(product.description) }}
      </div>
      <div class="text-h6 text-primary text-weight-bold q-mt-lg product-price">
        ${{ product.price }}
      </div>
      </q-card-section>

     <q-card-actions class="q-px-md q-pb-md actions-footer">
      <div class="full-width row justify-between items-center">
        <q-btn
          round
          color="grey-7"
          icon="visibility"
          size="md"
          @click="viewDetails(product)"
          class="q-mr-sm"
        >
          <q-tooltip>
            View details
          </q-tooltip>
        </q-btn>

        <q-btn
          round
          color="indigo-10"
          icon="shopping_cart"
          size="md"
          @click="addToCart(product)"
        >
          <q-tooltip>
            Add to cart
          </q-tooltip>
        </q-btn>
      </div>
    </q-card-actions>
    </q-card>
</template>

<style scoped>

.product-card {
  width: 100%;
  max-width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 12px;
}

.product-title {
  margin: 8px 0;
  font-size: 16px;
  line-height: 1.3;
  min-height: 2.6em;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-description {
  line-height: 1.4;
  min-height: 4.2em;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.product-card {
  min-height: 460px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.actions-footer {
  margin-top: auto;
}


</style>