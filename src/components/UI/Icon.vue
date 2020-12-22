<template lang="pug">
InlineSvg.icon(
    :src="require(`@/assets/icons/${name}.svg`)"
    :width="width"
    :height="height"
  )
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg,
  },
  props: {
    name: { default: '', type: String },
    width: { default: null, type: Number },
    height: { default: null, type: Number },
  },
};
</script>

<style lang="scss">
.icon {

  * {
    transition: fill $trs, stroke $trs;
  }
}
</style>
