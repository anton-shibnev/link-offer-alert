<template lang="pug">
.price
  .price__col
    .price__main 7 761 262 ₽
    .price__main-desc Цена при 100% оплате или в ипотеку
  .price__col
    .price__base Базовая цена: 8 465 123 ₽
    .price__profit Выгода: 703 861 ₽
</template>

<script>
export default {
  data: () => ({
    name: 'price',
  }),
};
</script>

<style lang="scss" scoped>
.price {
  @media #{min-width-for('xs')} {
    display: flex;
  }

  &__col {
    &:last-child {
      @include margin-top(('mob': 20px, 'xs': 0));
      @include margin-left(('xs': 85px));
      display: flex;
      align-items: center;

      @media #{min-width-for('xs')} {
        text-align: right;
        display: block;
      }
    }
  }

  &__main {
    @include font(
      ('mob': 30px, 'xs': 40px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.03em)
    );
  }

  &__main-desc {
    @include font(
      ('mob': 12px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.03em)
    );
    @include margin-top(('mob': 5px));

    color: $grey;
  }

  &__base {
    @include font(
      ('mob': 14px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.03em)
    );
  }

  &__profit {
    @include font(
      ('mob': 14px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.03em)
    );
    @include margin-top(('mob': 0, 'xs': 5px));
    @include margin-left(('mob': 10px, 'lg': 0));

    color: $danger;
  }
}
</style>
