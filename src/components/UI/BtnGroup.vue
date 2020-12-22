<template lang="pug">
.btn-group
  Btn.btn-group__btn(
      v-for="(btn, i) in list"
      :key="i"
      @click.native="setActive(i)"
      :label="btn.label"
      pill
      :white="isActive(i)"
    )
</template>

<script>
import Btn from '@/components/UI/Btn';

export default {
  components: { Btn },
  props: {
    list: { default: () => [], type: Array },
  },
  data() {
    return {
      name: 'btn-group',
      active: 0,
    };
  },
  methods: {
    isActive(i) {
      return this.active !== i;
    },
    setActive(i) {
      this.active = i;
      this.$emit('change-value', this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-group {
  @include flex-gap(10px, 0);

  display: flex;

  &__btn {
    user-select: none;
  }
}
</style>
