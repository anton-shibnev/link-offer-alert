<template lang="pug">
component.btn(
    :is='isLink'
    :href='href'
    :class="[{'btn--light': light }, {'btn--white': white }, {'btn--pill': pill } ]"
    )
  span.btn__label(v-text='label')
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
    href: { type: String, default: null },
    light: { type: Boolean, default: false },
    white: { type: Boolean, default: false },
    pill: { type: Boolean, default: false },
  },
  data: () => ({
    name: 'btn',
  }),
  computed: {
    isLink() {
      return this.$props.href ? 'a' : 'button';
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @include btn-reset();
  @include padding((
    'mob': 5px 10px,
    'xs': 10px 20px
  ));
  @include btn-behavior($primary, $white);

  border-radius: 50px;
  display: grid;
  width: max-content;

  &--light {
    @include btn-behavior($grey-light, $black);
  }

  &--white {
    @include btn-behavior($white, $black, $primary, $white);
  }

  &--pill {
    @include padding(('mob': 6px 12px 7px));

    border-radius: 16px;
  }

  &__label {
    @include font(
      ('mob': 12px,'xs': 16px),
      ('mob': 1.2),
      ('mob': 400),
    );
  }
}
</style>
