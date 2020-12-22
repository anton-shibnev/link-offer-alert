<template lang="pug">
footer.footer
  .footer__inner.footer__inner--top
    .footer__col
      .footer__logo
        Icon.hero__logo(name="logo")
      .footer__soc-list
        FooterSocList(:list="socList")
    .footer__col
      .footer__manager
        Manager
    .footer__col
      .footer__office
        .footer__office-title Офис продаж:
        .footer__office-address г. Санкт-Петербург, Московский проспект, 73, корпус 6
        .footer__office-wrap
          a(href="#").footer__office-tel 8182 46-42-28
          a(href="#").footer__office-mail invest@akvilon-invest.ru
  hr.footer__hr
  .footer__inner.footer__inner--bottom
    .footer__disclaimer Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ.
    .footer__dev
      | Разработано:
      a.footer__dev-link(href="#")  AlertGroup
</template>

<script>
import Icon from '@/components/UI/Icon';
import FooterSocList from '@/components/blocks/Footer/FooterSocList';
import Manager from '@/components/Manager';

export default {
  components: { Manager, FooterSocList, Icon },
  data() {
    return {
      name: 'footer',
      socList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  $this: &;
  background-color: $white;

  &__inner {
    @include padding-x-arr(('mob': 10px, 'xs': 60px));

    @media #{min-width-for('lg')} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: start;
    }

    &--top {
      @include padding-y-arr(('mob': 40px, 'lg': 50px));

      @media #{min-width-for('xs')} {
        display: flex;
        flex-wrap: wrap;

        #{$this}__col {
          &:nth-child(1) {
            width: 100%;
          }

          &:nth-child(2),
          &:nth-child(3) {
            flex: .5;
          }
        }
      }
      @media #{min-width-for('lg')} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: start;
      }
    }

    &--bottom {
      @include padding-y-arr(('mob': 20px, 'lg': 50px));
    }
  }

  &__hr {
    @include wh(100%, 1px);

    border: none;
    background-color: rgba($black, 0.1);
    margin: 0;
  }

  &__logo {
    @include margin-right(('xs': 42px, 'lg': 0));
  }

  &__col {
    @include bp-change(justify-content, ('mob': space-between, 'xs': flex-start));
    @include bp-change(display, ('mob': flex, 'lg': block));

    align-items: center;

    &:not(:first-child) {
      @include margin-top(('mob': 40px, 'lg': 0));
    }
  }

  &__manager {
    ::v-deep {
      .manager {
        &__ava {
          @include wh-arr(('mob': 28px));
        }

        &__data-row {
          display: flex;
        }

        &__mail {
          @include margin-left(('mob': 10px));
        }
      }
    }
  }

  &__soc-list {
    @include margin-top(('lg': 15px));

    width: min-content;
  }

  &__office-title {
    @include font(('mob': 16px), ('mob': 1), ('mob': bold), ('mob': -0.03em));
  }

  &__office-address {
    @include font(('mob': 16px), ('mob': 1.2), ('mob': normal), ('mob': -0.03em));
    @include margin-top(('mob': 10px));
  }

  &__office-wrap {
    @include bp-change(display, ('mob': flex, 'lg': block));
    @include margin-top(('mob': 20px, 'lg': 0));
  }

  &__office-tel,
  &__office-mail {
    @extend %link-dark;
    display: block;
    width: max-content;
  }

  &__office-tel {
    @include font(('mob': 16px), ('mob': 1), ('mob': normal), ('mob': -0.03em));
    @include margin-top(('lg': 20px));
  }

  &__office-mail {
    @include font(('mob': 16px), ('mob': 1), ('mob': normal), ('mob': -0.03em));
    @include margin-top(('lg': 5px));
    @include margin-left(('mob': 4px, 'lg': 0));
  }

  &__disclaimer {
    @include font(('mob': 12px, 'xs': 16px), 1.2, normal, -0.03em);
    color: $grey-2;

    grid-area: 1 / 1 / 1 / 3;
    max-width: 895px;
  }

  &__dev {
    @include font(('mob': 14px, 'xs': 16px), 1.2, normal, -0.03em);
    @include bp-change(text-align, ('mob': center, 'lg': left));
    @include margin-top(('mob': 20px, 'xs': 40px, 'lg': 0));
  }

  &__dev-link {
    @extend %link-dark;
  }
}
</style>
