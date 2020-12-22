<template lang="pug">
.advantages
  .advantages__title Преимущества квартиры:
  .advantages__pill-list
    PillList(:list="pillList")
</template>

<script>
import PillList from '@/components/UI/PillList';

export default {
  components: { PillList },
  data() {
    return {
      name: 'advantages',
      pillList: [
        'Раздельный санузел', 'Высокие потолки', 'Гардероб', 'Большая кухня', 'Окна на 2 стороны',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.advantages {
  &__title {
    @include font(
      ('mob': 14px, 'xs': 16px),
      ('mob': 1),
      ('mob': bold),
      ('xs': -0.03em)
    );
  }

  &__pill-list {
    @include margin-top(('mob': 15px, 'xs': 20px));
  }
}
</style>
