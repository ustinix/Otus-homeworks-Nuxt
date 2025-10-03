<script setup lang="ts">

</script>

<template>
  <div class="main-page-placeholder">
    <div class="banner-section">
      <div class="banner-content">
        <h1 class="banner-title">Online Store</h1>
        <p class="banner-subtitle">
          Discover our wide range of educational products, courses, and learning materials
          designed to enhance your knowledge and skills
        </p>
        <div class="button-container">
           <NuxtLink to="/catalog" class="button">Catalog</NuxtLink>
        </div>
      </div>
    </div>
    <div class="features-section">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <div class="feature-card">
            <q-icon name="local_shipping" color="primary" size="lg" />
            <h3>Fast Delivery</h3>
            <p>Quick shipping to your doorstep</p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="feature-card">
            <q-icon name="verified" color="primary" size="lg" />
            <h3>Quality Guarantee</h3>
            <p>All products are thoroughly checked</p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="feature-card">
            <q-icon name="support_agent" color="primary" size="lg" />
            <h3>24/7 Support</h3>
            <p>Always here to help you choose</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-page-placeholder {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  .banner-section {
  display: flex;
  align-items: center;
  color: white;
  min-height: 60vh;
  margin: 0 auto;

    .banner-content {
      margin: 0 auto;

      .banner-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }

      .banner-subtitle {
        font-size: 1.2rem;
        margin-bottom: 2.5rem;
        opacity: 0.9;
        line-height: 1.6;
      }
    }
  }
}
.features-section {
  padding: 80px 5%;
  background: white;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.5;
}

</style>