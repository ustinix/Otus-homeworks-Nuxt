<script setup lang="ts">
import type { Product } from '~/types/product';

const route = useRoute();
const productId = route.params.id;
const { data: product, error} = useAsyncData(():Promise<Product> => $fetch(`/api/products/${productId}`))
</script>
<template>
  <div class="product-page">
      <NuxtLink to="/catalog" class="text-decoration-none">
        <q-btn
          class="q-mb-md"
          outline
          color="indigo-10"
          icon="arrow_back"
          label="Back to Catalog"
        />
      </NuxtLink>

      <h1 v-if="error">{{ error }}</h1>

      <div v-else-if="!product">
        <q-inner-loading showing>
          <q-spinner size="50px" color="indigo-10" />
        </q-inner-loading>
      </div>

      <q-card v-else-if="product" class="q-mt-md">
        <div class="row no-wrap">
          <div class="col-12 col-md-6">
            <div class="q-pa-md">
              <q-img
                :src="product.image"
                :alt="product.title"
                style="max-width: 400px;"
                class="product-image"
                ratio="1"
              />
            </div>
          </div>

          <div class="col-12 col-md-6">
            <q-card-section>
              <div class="text-h5 q-mb-md">{{ product.title }}</div>
              <div class="q-mb-md">
                <q-chip color="indigo-10" text-color="white" size="md">
                  {{ product.category }}
                </q-chip>
              </div>

              <q-card-section class="q-px-none">
                <p class="text-body1 q-mb-lg">{{ product.description }}</p>
                <div class="text-h4 text-indigo-10 q-mb-lg">
                  ${{ product.price.toFixed(2) }}
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn
                  color="indigo-10"
                  label="Add to Cart"
                  size="lg"
                  icon="shopping_cart"
                />
              </q-card-actions>
            </q-card-section>
          </div>
        </div>
      </q-card>
  </div>
</template>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
}

.back-btn {
  font-weight: 600;
}

.error-message {
  color: var(--error-color);
  text-align: center;
  padding: 40px;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.product-card {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-row {
  min-height: 500px;
}

.image-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 100%;
  max-width: 500px;
}

.product-image {
  border-radius: 8px;
  object-fit: cover;
}

.content-col {
  display: flex;
  align-items: center;
}

.product-content {
  width: 100%;
  padding: 32px;
}

.product-title {
  font-weight: 700;
  color: var(--bg-color-dark);
  line-height: 1.3;
}

.category-chip {
  font-weight: 500;
}

.description-section {
  margin-top: 24px;
}

.product-description {
  line-height: 1.6;
  font-size: 1.1rem;
}

.product-price {
  font-weight: 700;
  margin-top: 16px;
}

.actions-section {
  padding: 0;
  margin-top: 32px;
}

.add-to-cart-btn {
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 8px;
}


@media (max-width: 768px) {
  .product-page {
    padding: 16px;
  }

  .product-row {
    flex-direction: column;
    min-height: auto;
  }

  .image-col {
    order: 1;
    padding: 16px;
  }

  .content-col {
    order: 2;
  }

  .product-content {
    padding: 24px 16px;
  }

  .product-title {
    font-size: 1.5rem;
  }

  .product-price {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .product-page {
    padding: 12px;
  }

  .product-content {
    padding: 20px 12px;
  }

  .add-to-cart-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>