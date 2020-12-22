<template lang="pug">
Outer(:grey="true")
  .about
    .about__title О проекте
    .about__top-row
      PointList.about__top-list(:list="pointListList")
      .about__top-desc Жилой квартал «Лесной» расположен на юге Москвы. Проект включает в себя шесть жилых корпусов, школу, детский сад, физкультурно-оздоровительный комплекс, два подземных паркинга и один многоуровневый надземный.
        a.about__top-link(href="#") Сайт объекта
    .about__carousel(v-if="sliderList.length")
      Slider(:list="sliderList")
    .about__bottom
      .about__title Инфраструктура
      .about__bottom-row
        .about__bottom-col(v-for="col in bottomList")
          List(
              :title="col.title"
              :list="col.list"
            )
</template>

<script>
import Outer from '@/components/Outer';
import PointList from '@/components/UI/PointList';
import Slider from '@/components/UI/Slider/Slider';
import List from '@/components/UI/List';

export default {
  components: {
    List, Slider, PointList, Outer,
  },
  data() {
    return {
      name: 'about',
      pointListList: [
        { name: 'Срок сдачи', value: '2 очередь – 2 кв. 2021' },
        { name: 'Технология строительства', value: 'Кирпично-монолитный' },
        { name: 'Фасад', value: 'Облицовочный кирпич' },
        { name: 'Паркинг', value: 'Отдельный многоуровневый паркинг' },
      ],
      sliderList: ['gallery/1.jpg', 'gallery/1.jpg'],
      bottomList: [
        {
          title: 'В непосредственной близости:',
          list: ['Жилой квартал', '«Лесной» расположен', 'Проект включает', 'Шесть жилых корпусов', 'Школу, детский сад', 'Физкультурно-оздоровительный'],
        },
        {
          title: 'В непосредственной близости:',
          list: ['Жилой квартал', '«Лесной» расположен', 'Проект включает', 'Шесть жилых корпусов', 'Школу, детский сад', 'Физкультурно-оздоровительный'],
        },
        {
          title: 'В непосредственной близости:',
          list: ['Жилой квартал', '«Лесной» расположен', 'Проект включает', 'Шесть жилых корпусов', 'Школу, детский сад', 'Физкультурно-оздоровительный'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__title {
    @extend %h2;
  }

  &__top-row {
    @include margin-top(('mob': 10px, 'xs': 20px, 'lg': 40px));

    @media #{min-width-for('lg')} {
      display: flex;
      justify-content: space-between;
    }
  }

  &__top-list {
    @include width(('lg': 40%));
  }

  &__top-desc {
    @extend %desc;
    @include width(('lg': 25%));
    @include margin-top(('mob': 10px, 'xs': 20px));
  }

  &__top-link {
    @include lined($grey-2, 1px, 'on');
    @include margin-top(('mob': 10px, 'xs': 20px));

    color: $grey-2;
    display: block;
    width: max-content;
  }

  &__carousel {
    @include margin-top(('mob': 40px, 'xs': 60px));
  }

  &__bottom {
    @include margin-top(('mob': 40px, 'xs': 60px));
  }

  &__bottom-row {
    @include margin-top(('mob': 40px));
    @include bp-change(grid-gap, ('mob': 10px, 'xs': 0));

    display: grid;

    @media #{min-width-for('xs')} {
      grid-auto-flow: column;
    }
  }
}
</style>
