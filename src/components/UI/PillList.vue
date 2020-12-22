<template lang="pug">
.pill-list
  .pill-list__pill(v-for="pill in list") {{ pill }}
</template>

<script>
export default {
  props: {
    list: { default: () => [], type: Array },
  },
  data() {
    return {
      name: 'pillList',
    };
  },
};
</script>

<style lang="scss" scoped>
.pill-list {
  @include flex-gap-arr(('mob': 5px, 'xs': 10px));

  display: flex;
  flex-wrap: wrap;

  &__pill {
    @include font(
      ('mob': 12px, 'xs': 16px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.05em)
    );
    @include padding((
      'mob': 6px 12px,
      'xs': 8px 12px,
    ));

    border-radius: 20px;
    border: 1px solid rgba($black, .1);
    background-color: $white;
  }
}
</style>
