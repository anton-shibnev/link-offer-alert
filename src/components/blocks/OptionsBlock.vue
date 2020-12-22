<template lang="pug">
Outer#optionsBlock(:grey="true")
  .options-block
    .options-block__title Варианты отделки

    .options-block__btn-group
      BtnGroup(
        :list="tabList"
        @change-value="btnGroupValue"
      )

    .options-block__tabs
      template(v-for="(tab, i) in tabList")
        .options-block__tab(v-if="active === i")
          .options-block__tab-desc {{ tab.desc }}

          List.options-block__tab-list(:list="tab.list")

          .options-block__tab-gallery(v-if="tab.galleryList.length")
            Gallery(:list="tab.galleryList")
</template>

<script>
import Outer from '@/components/Outer';
import BtnGroup from '@/components/UI/BtnGroup';
import Gallery from '@/components/Gallery';
import List from '@/components/UI/List';

export default {
  components: {
    List,
    Gallery,
    BtnGroup,
    Outer,
  },
  data() {
    return {
      name: 'options-block',
      active: 0,
      itemsPerRow: 3,
      tabList: [
        {
          label: 'Grand',
          desc: 'Все квартиры сдаются с отделкой WhiteBox, значительно экономящей время и средства на будущий ремонт: подготовленные под покраску стены, выровненный потолок, стяжка пола, разводка электричества с установкой розеток и выключателей, интегрированные разъемы для Интернета, телефона и антенны, установка всех счетчиков, качественные радиаторы отопления с встроенными терморегуляторами.',
          list: ['Жилой квартал', '«Лесной» расположен', 'Проект включает', 'Шесть жилых корпусов', 'Шесть жилых корпусов', 'Шесть жилых корпусов', 'Шесть жилых корпусов', 'Шесть жилых корпусов', 'Шесть жилых корпусов', 'Шесть жилых корпусов', 'Шесть жилых корпусов'],
          galleryList: ['gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg'],
        },
        {
          label: 'Terra',
          desc: 'Все квартиры сдаются с отделкой WhiteBox, значительно экономящей время и средства на будущий ремонт: подготовленные под покраску стены, выровненный потолок, стяжка пола, разводка электричества с установкой розеток и выключателей',
          list: ['Жилой квартал', '«Лесной» расположен', 'Проект включает', 'Шесть жилых корпусов', 'Школу, детский сад', 'Физкультурно-оздоровительный комплекс'],
          galleryList: ['gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg'],
        },
        {
          label: 'Graphite',
          desc: 'Все квартиры сдаются с отделкой WhiteBox, значительно экономящей время и средства на будущий ремонт: подготовленные под покраску стены, выровненный потолок, стяжка пола, разводка электричества с установкой розеток и выключателей, интегрированные разъемы для Интернета, телефона и антенны, установка всех счетчиков, качественные радиаторы отопления с встроенными терморегуляторами.',
          list: ['Жилой квартал', '«Лесной» расположен', 'Проект включает', 'Шесть жилых корпусов', 'Школу, детский сад', 'Физкультурно-оздоровительный комплекс'],
          galleryList: ['gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg', 'gallery/1.jpg'],
        },
      ],
    };
  },
  methods: {
    articleGroups(arr) {
      return Array.from(Array(Math.ceil(arr.length / this.itemsPerRow)).keys());
    },
    btnGroupValue(par) {
      this.active = par;
    },
  },
};
</script>

<style lang="scss" scoped>
.options-block {
  &__title {
    @extend %h2;
  }

  &__btn-group {
    @include margin-top(('mob': 20px, 'lg': 30px));
  }

  &__tab {
    width: 100%;
  }

  &__tabs {
    @include margin-top(('mob': 20px, 'lg': 30px));
  }

  &__tab-list {
    @include margin-top(('mob': 30px));

    ::v-deep {
      .list__inner {
        @media #{min-width-for('lg')} {
          grid-template-rows: repeat(6, 1fr);
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }

  &__tab-list,
  &__tab-desc {
    @extend %desc;
  }

  &__tab-gallery {
    @include margin-top(('mob': 20px, 'lg': 60px));
  }
}
</style>
