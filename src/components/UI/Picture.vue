<template lang="pug">
picture.picture
  template(v-for="source in pictureObject.sourceList")
    source(
      v-if="source.srcset"
      :key="source.media"
      :srcset="source.srcset"
      :media="`(min-width: ${source.media}px)`"
    )
  img(
    :src="pictureObject.defaultSrc"
    :alt="pictureObject.alt"
  )
</template>

<script>
export default {
  name: 'Picture',
  props: {
    pictureObject: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" module>
.picture {
  background-color: rgba($primary, 0.1);
  display: block;

  img {
    @include wh(100%);

    object-fit: cover;
  }
}
</style>
