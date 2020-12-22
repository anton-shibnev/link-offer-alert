<template lang="pug">
.point-list
  .point-list__item(v-for="item in list")
    .point-list__item-name {{ item.name }}:
    .point-list__item-space
    .point-list__item-value {{ item.value }}
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
  },
  data: () => ({
    name: 'PointList',
  }),
};
</script>

<style lang="scss" scoped>
.point-list {
  display: grid;
  grid-gap: 14px;
  width: 100%;
  align-content: baseline;

  &__item {
    display: flex;
  }

  &__item-space {
    @include margin-x(5px);
    flex: 1;
    border-bottom: 1px dashed rgba($black, 0.15);
  }

  &__item-value,
  &__item-name {
    @include font(
      ('mob': 14px, 'xs': 20px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.03em)
    );
  }

  &__item-value {}
}
</style>
