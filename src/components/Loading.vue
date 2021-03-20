<template>
  <div class="loading-container">
    <transition name="fade">
      <div
        v-if="loading"
        key="loading"
        class="loading"
      >
        <b-row class="vh-100 text-center" align-v="center">
          <b-col>
            <slot name="loading">
              <p>Loading...</p>
            </slot>
          </b-col>
        </b-row>
      </div>
      <div
        v-else
        key="content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['loading'],
};
</script>

<style lang="scss" scoped>
.loading-container {
  position: relative;

  p{
    margin: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
