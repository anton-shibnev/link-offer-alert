<template lang="pug">
.pag
  button.pag__back(@click="changeItem('-')")
    Icon.pag__icon(name="pag-back")
  .pag__list
    button.pag__item(
        v-for="(item, index) in list"
        v-text="index + 1"
        :class="{ 'pag__item--active': isActive(index)}"
        @click="setActive(index)"
      )
  button.pag__next(@click="changeItem('+')")
    Icon.pag__icon(name="pag-next")
</template>

<script>

import Icon from '@/components/UI/Icon';

export default {
  components: { Icon },
  data() {
    return {
      name: 'pag',
      active: 1,
      list: [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
      ],
    };
  },
  methods: {
    isActive(i) {
      return this.active === i;
    },
    setActive(i) {
      this.active = i;
    },
    changeItem(direction) {
      const isLast = this.active !== this.list.length - 1;
      const isFirst = this.active !== 0;

      if (direction === '+' && isLast) this.active += 1;
      if (direction === '-' && isFirst) this.active -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.pag {
  @include bp-change(width, ('mob': 68px));

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: $dark;
  height: 100vh;
  z-index: 50;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  grid-gap: 20px;

  &__list {
    display: grid;
    justify-items: center;
    grid-gap: 24px;
  }

  &__item {
    @include btn-reset();
    @include font(36px, 1, 400);

    color: $white;
    opacity: 0.38;
    transition: opacity $trs;

    &:hover,
    &--active {
      opacity: 1;
    }
  }

  &__next,
  &__back {
    @include btn-reset();
    transition: transform $trs;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__icon {
    @include svg-icon();
  }
}
</style>
