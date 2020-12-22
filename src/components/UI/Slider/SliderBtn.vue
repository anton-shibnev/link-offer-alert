<template lang="pug">
button.slider-btn(
    :class="{ 'slider-btn--hide': isHide }"
    :data-glide-dir="glideDir"
  )
  Icon.slider-btn__icon(
      name="arrow-lined"
      :class="{ 'slider-btn__icon--left': glideDir === '<' }"
    )
</template>

<script>
import Icon from '@/components/UI/Icon';

export default {
  components: { Icon },
  props: {
    isHide: { default: true, type: Boolean },
    glideDir: { default: null, type: String },
  },
  data() {
    return {
      name: 'slider-btn',
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-btn {
  @include wh-arr(('mob': 20px, 'lg': 40px));
  @include btn-reset;

  border: none;
  pointer-events: auto;
  transition: opacity 0.5s, transform 0.5s;
  cursor: pointer;

  &--hide {
    opacity: 0;
    transform: scale(0);
  }

  &__icon {
    @include svg-icon(100%);
    &--left {
      transform: rotate(180deg);
    }
  }
}
</style>
