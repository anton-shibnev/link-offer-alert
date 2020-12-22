<template lang="pug">
Outer#planBlock(:grey="true")
  .plan-block
    .plan-block__title 1-комнатная № 123
    .plan-block__price
      Price
    .plan-block__plan-tabs
      PlanTabs
    .plan-block__data
      .plan-block__advantages
        Advantages
      .plan-block__wrap-point-lists
        .plan-block__point-list(v-for="list in listList")
          PointList(:list="list")
</template>

<script>
import Outer from '@/components/Outer';
import Price from '@/components/blocks/plan-block/Price';
import PlanTabs from '@/components/blocks/plan-block/PlanTabs';
import Advantages from '@/components/blocks/plan-block/Advantages';
import PointList from '@/components/UI/PointList';

export default {
  components: {
    PointList,
    Advantages,
    PlanTabs,
    Price,
    Outer,
  },
  data() {
    return {
      name: 'plan-block',
      listList: [
        [
          { name: 'Корпус', value: '1А' },
          { name: 'Секция', value: '4' },
          { name: 'Этаж', value: '12 из 25' },
          { name: 'Срок сдачи', value: '2 квартал 2020' },
        ],
        [
          { name: 'Общ. площадь', value: '123м²' },
          { name: 'Кухня', value: '16м²' },
          { name: 'Кол-во спален', value: '1' },
          { name: 'Высота потолка', value: '2.7 м' },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.plan-block {
  @media #{min-width-for('xs')} {
    display: grid;
    grid-template-areas: 'title' 'price' 'data' 'plan-tabs';
  }

  @media #{min-width-for('lg')} {
    grid-template-areas:
      'plan-tabs title'
      'plan-tabs price'
      'plan-tabs data';
  }

  @media #{min-width-for('lg')} {
    grid-template-columns: 3fr 2fr;
    grid-gap: 0 50px;
  }

  &__title {
    @extend %h2;
    @include margin-left(('mob': -8px));

    @media #{min-width-for('xs')} {
      grid-area: title;
    }
  }

  &__price {
    @include margin-top(('mob': 40px));

    @media #{min-width-for('xs')} {
      grid-area: price;
    }
  }

  &__plan-tabs {
    @include margin-top(('xs': 100px, 'lg': 0));

    @media #{min-width-for('xs')} {
      grid-area: plan-tabs;
    }
  }

  &__data {
    @media #{min-width-for('xs')} {
      grid-area: data;
    }
  }

  &__advantages {
    @include margin-top(('mob': 92px, 'xs': 60px, 'lg': 20px));
  }

  &__wrap-point-lists {
    @include margin-top(( 'mob': 44px, 'xs': 40px, ));
    @include bp-change(grid-auto-flow, ('xs': column, 'lg': row));

    display: grid;
    grid-gap: 40px;
  }

  &__point-list {
  }
}
</style>
