<template lang="pug">
section.hero
  .container
    .hero__inner
      .hero__top
        Icon.hero__logo(name="logo")
        .hero__manager
          Manager
        Btn.hero__btn(:label="`Избранное: ${favCount}`")
      .hero__title
        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
        | Уважаемый клиент,
        br
        | мы подобрали для вас&nbsp;&nbsp;
        br
        | 7 квартир
</template>

<script>
import Icon from '@/components/UI/Icon';
import Btn from '@/components/UI/Btn';
import Manager from '@/components/Manager';

export default {
  components: { Manager, Btn, Icon },
  data: () => ({
    name: 'hero',
    favCount: 0,
  }),
};
</script>

<style lang="scss" scoped>
.hero {
  @include padding-y-arr((
    'mob': (10px, 100px),
    'lg': (60px, 150px)
  ));

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__manager {
    @include bp-change(max-width, ('mob': 155px, 'xs': none))
  }

  &__logo {
    @include svg-icon();
    @include wh-arr((
      'mob': (88px, 28px),
      'xs': (134px, 40px),
    ));
    flex-shrink: 0;
  }

  &__title {
    @include font(
      ('mob': 30px, 'xs': 70px, 'lg': 100px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.05em)
    );
    @include margin-top(('mob': 100px,'lg': 150px));
  }

  &__btn {
    @include bp-change(display, ('mob': none, 'xs': block ));
  }
}
</style>
