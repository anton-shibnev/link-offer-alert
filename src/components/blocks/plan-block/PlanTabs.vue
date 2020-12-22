<template lang="pug">
.plan-tabs
  .plan-tabs__plan
    template(v-for="(pic, index) in list")
      img.plan-tabs__plan-pic(
        :key="index"
        :src="require(`@/assets/images/plan/${pic.src}.png`)"
        :class="{ 'plan-tabs__plan-pic--active': active === index }"
        alt=""
      )

  .plan-tabs__btn-group
    BtnGroup(
      :list="list"
      @change-value="btnGroupValue"
    )
</template>

<script>
import Btn from '@/components/UI/Btn';
import BtnGroup from '@/components/UI/BtnGroup';

export default {
  components: { BtnGroup, Btn },
  data() {
    return {
      name: 'plan-tabs',
      active: 0,
      list: [
        { label: 'планировка', src: '1' },
        { label: 'на плане этажа', src: '1' },
      ],
    };
  },
  methods: {
    btnGroupValue(par) {
      this.active = par;
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-tabs {
  &__btn-group {
    @include margin-top(('mob': 20px));

    display: flex;
    justify-content: center;
  }

  &__plan {
    @include height(('mob': 300px, 'lg': 480px));

    position: relative;
  }

  &__plan-pic {
    position: absolute;
    transform: translate(-50%, -50%) scale(0);
    left: 50%;
    top: 50%;
    opacity: 0;
    transition: transform $trs-med, opacity $trs-med;
    height: 100%;
    object-fit: contain;

    &--active {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
