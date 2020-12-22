<template lang="pug">
yandex-map.ya-map(
    :coords="coords"
    zoom="15"
    :behaviors="['drag']"
    :controls="['zoomControl']"
  )
  // TODO not working marker
  ymap-marker.y-maps-balloon(
      :coords="coords"
      marker-id="city"
      :icon="iconSetup('map-house')"
  )
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  components: { yandexMap, ymapMarker },
  data() {
    return {
      name: 'yaMap',
      coords: [59.902203, 30.312392],
      officeCoords: [59.905497, 30.316686],
    };
  },
  methods: {
    iconSetup(name) {
      return {
        layout: 'default#imageWithContent',
        imageSize: [67, 69],
        imageOffset: [-34, -69],
        imageHref: `assets/icons/${name}.svg`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ya-map {
  @include wh(100%);
}
</style>
