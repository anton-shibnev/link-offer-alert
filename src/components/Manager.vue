<template lang="pug">
.manager
  .manager__ava {{ getLetterFromManagerName }}
  .manager__data
    .manager__name Ваш персональный менеджер, {{ managerName }}
    .manager__data-row
      a.manager__tel(href="tel:88005553535") 8 800 555 35 35
      a.manager__mail(href="mailto:ushakova@ya.ru") ushakova@ya.ru
</template>

<script>
export default {
  props: {
    managerName: { default: 'Ушакова Мария', type: String },
  },
  data() {
    return {
      name: 'manager',
    };
  },
  computed: {
    getLetterFromManagerName() {
      return this.$props.managerName[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.manager {
  @include bp-change(align-items, ('mob': start, 'lg': center));
  @include bp-change(grid-gap, ('mob': 10px, 'lg': 20px));

  display: grid;
  grid-auto-flow: column;

  &__ava {
    @include circle(( 'mob': 22px, 'xs': 40px ));
    @include font( ('mob': 12px, 'xs': 20px), 1, normal );

    background-color: $primary;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    user-select: none;
  }

  &__data {
    display: grid;
    grid-gap: 12px;
  }

  &__data-row {
    @include bp-change(display, ('mob': grid, 'xs': flex));
  }

  &__name {
    @include font(
      ('mob': 12px, 'xs': 16px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.03em)
    );
  }

  &__mail,
  &__tel {
    @extend %link-dark;
    @include font(
      ('mob': 12px, 'xs': 16px),
      ('mob': 1),
      ('mob': bold),
      ('mob': -0.03em)
    );
  }

  &__mail {
    @include margin-left(('xs': 18px));
  }
}
</style>
