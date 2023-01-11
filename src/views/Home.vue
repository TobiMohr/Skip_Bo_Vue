<template>
  <q-page>
    <GameBoard></GameBoard>
  </q-page>
</template>
<script>
import GameBoard from '@/components/GameBoard.vue';
import $ from "jquery";
export default {
  name: "Skip_Bo",
  components: { GameBoard },

  data() {
    return {
      backendOnline: false,
    }
  },
  mounted() {
    $.ajax({
      url: 'http://localhost:9000/status'
    }).done(() => {
      this.backendOnline = true;
    });
  },
}
</script>
<style lang="less">
@x-small: 575px; // >=
@small: 767px; // >=
@medium: 991px; // >=
@large: 1199px; // >=
@xl: 1399px; // >=
@xxl: 1400px; // <=
/*
Breakpoint	Class	Dimensions
X-Small	None	< 576px
Small	sm	≥ 576px
Medium	md	≥ 768px
Large	lg	≥ 992px
Extra large	xl	≥ 1200px
Extra extra large	xxl	≥ 1400px
 */
</style>
