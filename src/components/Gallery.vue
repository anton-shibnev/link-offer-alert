<template lang="pug">
.gallery
  CoolLightBox(
    :items="lightBoxList"
    :index="index"
    fullscreen="true"
    @close="index = null"
  )
  .gallery__grid
    .gallery__grid-item(
        v-for="(pic, imageIndex) in list.slice(0, gridLength)"
        :key="imageIndex"
        @click="index = imageIndex"
      )
      PicCard(
        component-is="button"
        :class="{'gallery__grid-item--btn': isLast(imageIndex)}"
        :src="require(`@/assets/images/${pic}`)"
      )
        span.gallery__rest-length(v-if="isLast(imageIndex)")
          | +{{ list.slice(gridLength).length }}
</template>

<script>
import PicCard from '@/components/UI/PicCard';
import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
  components: { PicCard, CoolLightBox },
  props: {
    list: { default: () => [], type: Array },
  },
  data() {
    return {
      index: null,
      name: 'gallery',
      gridLength: 5,
    };
  },
  computed: {
    lightBoxList() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return this.list.map((item) => require(`@/assets/images/${item}`));
    },
  },
  methods: {
    isLast(i) {
      return this.gridLength === i + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  $this: &;

  &__grid {
    @include bp-change(grid-template-rows, ('mob': repeat(4, 147px), 'xs': repeat(2, 195px), 'lg': repeat(2, 245px)));
    @include bp-change(grid-template-columns, ('mob': repeat(2, 1fr), 'xs': repeat(6, 1fr)));
    @include bp-change(grid-gap, $gap);

    display: grid;
  }

  &__grid-item {
    $areas: (
      '1 / 1 / 3 / 3',
      '3 / 1 / 4 / 2',
      '3 / 2 / 4 / 3',
      '4 / 1 / 5 / 2',
      '4 / 2 / 5 / 3',
    );
    @include each-arr-nth($areas, grid-area);
    @extend %skeleton;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;

    @media #{min-width-for('xs')} {
      $areas: (
        '1 / 1 / 3 / 4',
        '1 / 4 / 2 / 6',
        '2 / 4 / 3 / 6',
        '1 / 6 / 2 / 7',
        '2 / 6 / 3 / 7',
      );
      @include each-arr-nth($areas, grid-area);
    }

    &--btn {
      @include btn-reset();

      position: relative;

      @include pseudo() {
        @include abs-spread();

        background-color: rgba($black, 0.5);
        z-index: 5;
      }
    }
  }

  &__rest-length {
    @include font(
      ('mob': 50px, 'xs': 60px),
      1,
      400,
      -0.5px
    );
    @include abs-center();

    color: $white;
    z-index: 10;
  }
}
</style>
