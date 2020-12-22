<template lang="pug">
.slider
  vue-glide.slider__inner(
      :options="sliderOptions"
      v-model="sliderOptions.active"
      :class="{ 'slider__inner--grab': sliderOptions.dragThreshold }"
    )
    vue-glide-slide.slider__slide.carousel-cell(
        v-for="(slide, i) in list"
        :key="i"
      )
      img.slider__slide-pic(:src="require(`@/assets/images/${slide}`)")

    template(#control)
      SliderBtn(
        :is-hide="isFirstSlide"
        glide-dir="<"
      )
      SliderBtn(
        :is-hide="isLastSlide"
        glide-dir=">"
      )

  .slider__counter
    SliderCounter(
      :length="list.length"
      :active="sliderOptions.active"
    )
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';
import SliderCounter from '@/components/UI/Slider/SliderCounter';
import SliderBtn from '@/components/UI/Slider/SliderBtn';

export default {
  components: {
    SliderBtn,
    SliderCounter,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  props: {
    list: { type: Array, default: () => [] },
  },
  data() {
    return {
      name: 'slider',
      sliderOptions: {
        active: 0,
        perView: 1,
        perTouch: 1,
        gap: 84,
        dragThreshold: true,
      },
    };
  },
  computed: {
    isFirstSlide() {
      return this.sliderOptions.active === 0;
    },
    isLastSlide() {
      return (this.sliderOptions.active + (this.sliderOptions.perView - 1)) === this.list.length - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  $this: &;
  $control-height: ('mob': 32px, 'xs': 40px, 'md': 40px, 'lg': 48px);

  position: relative;
  @include wh(100%);

  &__inner {
    @include wh(100%);

    &--grab {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }
  }

  &__slide {
    @include wh(100%);

    user-select: none;
  }

  &__slide-pic {
    @include height(('mob': 304px, 'xs': 500px, 'lg': 600px));
    @include bp-change(border-radius, ('mob': 5px));

    object-fit: cover;
    width: 100%;
  }

  &__counter {
    @include bp-change(
      margin-top,
      (
        'mob': 10px,
      )
    );
    display: flex;
    justify-content: flex-end;
  }

  ::v-deep {
    [data-glide-el="controls"] {
      @include abs-center();
      @include width(('mob': calc(100% - 10px), 'lg': calc(100% - 66px)));

      display: flex;
      justify-content: space-between;
      align-items: center;
      pointer-events: none;
    }
    .glide {
      &__track {
        overflow: hidden;
        height: 100%;
      }

      &__slides {
        @include list-reset();

        display: flex;
        height: 100%;
      }
    }
  }
}
</style>
