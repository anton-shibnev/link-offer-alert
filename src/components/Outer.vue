<template lang="pug">
section.outer(:class="{ 'outer--grey': grey }")
  .container
    slot
</template>

<script>
export default {
  props: {
    grey: { default: false, type: Boolean },
  },
  data: () => ({
    name: 'Outer',
  }),
};
</script>

<style lang="scss" scoped>
.outer {
  @include padding-y-arr(('mob': 40px, 'lg': 100px));

  background-color: $white;

  &--grey {
    background: $grey-light;
    border-bottom: 1px solid rgba($black, .1);
  }
}
</style>
