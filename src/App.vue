<template lang="pug">
  div#appInner
    Hero
    .sticky-container
      Header
      PlanBlock
      MapBlock
      OptionsBlock
      About
      Footer

    // === overlays ===
    Pag
</template>

<script>
import Header from '@/components/blocks/header/Header';
import Hero from '@/components/blocks/Hero';
import Pag from '@/components/Pag';
import PlanBlock from '@/components/blocks/plan-block/PlanBlock';
import MapBlock from '@/components/blocks/map-block/MapBlock';
import OptionsBlock from '@/components/blocks/OptionsBlock';
import About from '@/components/blocks/about/About';
import Footer from '@/components/blocks/Footer/Footer';

export default {
  name: 'App',
  components: {
    Footer,
    About,
    OptionsBlock,
    MapBlock,
    PlanBlock,
    Pag,
    Hero,
    Header,
  },
};
</script>
