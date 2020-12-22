<template lang="pug">
header.header#header
  .container
    .header__inner
      .header__data
        .header__name ЖК Лесной
        .header__data-var Вариант №1
        .header__data-id ID - 1E43Q
      .header__btn-group
        Btn.header__btn-fav(
            :label="btnFavLabel"
            :light="!isBtnFavorite"
            :pill="true"
            @click.native="toggleBtnFavorite()"
          )
        a.header__btn-print
          Icon(name="print")
        a.header__btn-share
          Icon(name="share")
</template>

<script>
import Btn from '@/components/UI/Btn';
import Icon from '@/components/UI/Icon';

export default {
  components: { Icon, Btn },
  data() {
    return {
      name: 'header',
      isBtnFavorite: false,
    };
  },
  methods: {
    toggleBtnFavorite() {
      this.isBtnFavorite = !this.isBtnFavorite;
    },
  },
  computed: {
    btnFavLabel() {
      return this.isBtnFavorite ? 'в избранном' : 'в избранное';
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @include bp-change(
    border-top,
    ('mob': 1px solid rgba($black, .1), 'lg': none)
  );

  background-color: $white;
  width: 100%;
  z-index: 10;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  clip-path: polygon(0 0, 100% 0, 100% 120%, 0 120%);
  position: sticky;
  top: 0;

  &__inner {
    @include height($header-height);
    @include padding-y-arr(('mob': (15px, 11px)));

    @media #{min-width-for('xs')} {
      display: flex;
      align-items: center;
    }
  }

  &__name {
    @include font(
      ('mob': 14px, 'xs': 24px),
      ('mob': 1),
      ('mob': bold),
      ('mob': -0.03em)
    );
  }

  &__data {
    display: flex;
    align-items: center;
  }

  &__data-var {
    @include font(
      ('mob': 14px, 'xs': 24px),
      ('mob': 1),
      ('mob': 400),
      ('mob': -0.03em)
    );
    @include margin-left(('mob': 20px,'xs': 102px, 'lg': 90px));
  }

  &__data-id {
    @include font(
      ('mob': 12px, 'xs': 24px),
      ('mob': 1),
      ('mob': 400),
      ('mob': -0.03em)
    );
    @include margin-left(('mob': 10px, 'xs': 30px, 'lg': 10px));
  }

  &__data-id {
    color: $grey;
  }

  &__btn-group {
    display: flex;
    align-items: center;
    margin-left: auto;

    @include margin-top(('mob': 6px, 'xs': 0));
  }

  &__btn-fav {
    @include margin-left(('mob': 0, 'xs': 40px, 'lg': 20px));
    @include margin-right(('mob': auto, 'lg': 0));
    @include bp-change(order, ('xs': 10));
  }

  &__btn-share {
    @include margin-left(('mob': 5px, 'xs': 10px));
    @include bp-change(order, ('xs': 2));
  }

  &__btn-print {
    @include bp-change(order, ('xs': 1));
  }

  &__btn-print,
  &__btn-share {
    @include svg-icon();
    @include wh-arr((
      'mob': (26px, 16px),
      'xs': (40px, 30px)
    ));

    display: block;
    cursor: pointer;

    &:hover {
      ::v-deep .icon path {
        fill: $primary;
      }
    }
  }
}
</style>
