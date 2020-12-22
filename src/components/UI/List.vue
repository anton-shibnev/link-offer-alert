<template lang="pug">
.list
  .list__title(v-if="title") {{ title }}
  ul.list__inner
    li.list__item(v-for="item in list") {{ item }}
</template>

<script>
export default {
  props: {
    list: { default: () => [], type: Array },
    title: { default: '', type: String },
  },
  data() {
    return {
      name: 'list',
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__title {
    @include font(
      ('mob': 12px, 'lg': 20px),
      ('mob': 1),
      ('mob': bold),
      ('mob': -0.03em)
    );

    @include margin-bottom(('mob': 5px, 'lg': 28px ));
    @include bp-change(color, ('mob': $grey, 'lg': $black));
  }

  &__inner {
    @extend %ul-list;
    @extend %desc;
    @include bp-change(grid-gap, ('mob': 5px, 'lg': 10px));

    display: grid;
  }
}
</style>
