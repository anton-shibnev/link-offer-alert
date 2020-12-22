<template lang="pug">
Outer#mapBlock(:grey="true")
  .map-block
    .map-block__title Расположение
    .map-block__desc г. Санкт-Петербург, Московский проспект, 73, корпус 6
    .map-block__pill-list
      .map-block__pill(v-for="pill in pillList")
        .map-block__pill-way {{ pill.way }}
        Icon.map-block__pill-icon(:name="pill.icon")
        .map-block__pill-time {{ pill.time }}
    .map-block__map
      YaMap
</template>

<script>
import Outer from '@/components/Outer';
import PillList from '@/components/UI/PillList';
import Icon from '@/components/UI/Icon';
import YaMap from '@/components/UI/YaMap';

export default {
  components: {
    YaMap, Icon, PillList, Outer,
  },
  data() {
    return {
      name: 'MapBlock',
      pillList: [
        { way: 'Ст. метро - Чкаловская', time: '10 мин.', icon: 'walker' },
        { way: 'Ст. метро - Чкаловская', time: '10 мин.', icon: 'walker' },
        { way: 'Ст. метро - Чкаловская', time: '10 мин.', icon: 'walker' },
        { way: 'Ст. метро - Чкаловская', time: '10 мин.', icon: 'walker' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.map-block {
  &__title {
    @extend %h2;
  }

  &__desc {
    @include margin-top(('mob': 10px));
    @include font(
      ('mob': 14px, 'lg': 20px),
      ('mob': 1.2),
      ('mob': 400),
      ('xs': -0.03em)
    );
  }

  &__pill-list {
    @include margin-top(('mob': 40px));
    @include flex-gap-arr(('mob': 5px, 'lg': 10px));

    display: flex;
    flex-wrap: wrap;
  }

  &__pill {
    @include font(
      ('mob': 14px, 'lg': 16px),
      ('mob': 1),
      ('mob': 400),
      ('xs': -0.05em)
    );
    @include padding(('mob': 5px 10px,'lg': 6px 12px));

    border-radius: 20px;
    border: 1px solid rgba($black, .1);
    background-color: $white;
    display: flex;
    align-items: center;
  }

  &__pill-icon {
    @include margin-x-arr(('mob': 8px, 'lg': 14px));
  }

  &__map {
    @extend %skeleton;
    @include height(('mob': 400px, 'lg': 500px));
    @include margin-top(('mob': 20px));

    width: 100%;
    overflow: hidden;
    border-radius: 5px;
  }
}
</style>
