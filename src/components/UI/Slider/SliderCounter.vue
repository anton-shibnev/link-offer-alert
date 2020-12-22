<template lang="pug">
.slider-counter
  span.slider-counter__current {{ active + 1 }}
  span.slider-counter__length {{ `/${length}` }}
</template>

<script>
export default {
  props: {
    length: { default: 0, type: Number },
    active: { default: 0, type: Number },
  },
  data() {
    return {
      name: 'slider-counter',
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-counter {
  &__current {
    @include font(('mob': 24px), 1.2, 500, -0.01em);
  }

  &__length {
    @include font(('mob': 16px), 1.2, 400, -0.01em);
  }
}
</style>
