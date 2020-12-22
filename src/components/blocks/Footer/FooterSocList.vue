<template lang="pug">
ul.footer-soc-list
  li.footer-soc-list__item(v-for="item in list")
    a.footer-soc-list__item-link(:href="item.href")
      Icon.footer-soc-list__item-icon(:name="item.name")
</template>

<script>
import Icon from '@/components/UI/Icon';

export default {
  components: { Icon },
  data() {
    return {
      name: 'footer-soc-list',
      list: [
        { name: 'vk', href: '#' },
        { name: 'instagram', href: '#' },
        { name: 'facebook', href: '#' },
        { name: 'youtube', href: '#' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-soc-list {
  @include list-reset();

  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;

  &__item-link {
    &:hover {
      ::v-deep .icon * {
        fill: $primary;
      }
    }
  }

  &__item-icon {
    @include svg-icon();
    @include wh-arr(('mob': 25px));
  }
}
</style>
