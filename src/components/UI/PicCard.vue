<template lang="pug">
component.pic-card(
    :is="componentIs"
    :class="`pic-card--${componentIs}`"
    @click="$emit('on-click', $event)"
  )
  img.pic-card__pic(:src="src" alt="")
  slot
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    componentIs: { type: String, default: 'div' },
  },
  data() {
    return {
      name: 'pic-card',
    };
  },
};
</script>

<style lang="scss" scoped>
.pic-card {
  $this: &;

  @include wh(100%);

  align-items: end;
  position: relative;
  border-radius: 4px;
  display: grid;
  overflow: hidden;
  text-decoration: none;
  user-select: none;

  &__pic {
    @include abs-spread();
    object-fit: cover;
  }

  &--button {
    @include btn-reset();

    @media #{min-width-for('xs')} {

      &:hover {
        #{$this}__pic {
          transform: scale(1.1) rotate(0.02deg);
        }
      }
    }

    #{$this}__pic {
      @media #{min-width-for('xs')} {
        transform: scale(1) rotate(0.02deg);
        transition: transform 4s cubic-bezier(0, 1, 1, 1);
      }
    }
  }
}
</style>
