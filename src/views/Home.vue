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
// responsive
@card_size: 2vw;
@gameBoard_width: calc(@card_size * 6);
@gameBoard_height: calc(@card_size * 3);

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
// XS
@media(max-width: @x-small) and (orientation: landscape) {
  @card_size: 1vw;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);

  // hier müssen jetzt noch divs von der Gamecomponent gestylet werden 
}

@media(max-width: @x-small) and (orientation: portrait) {
  @card_size: 2.25vh;
}

// S
@media(max-width: (@small - 1)) and (min-width: (@x-small + 1)) and (orientation: landscape) {
  @card_size: 1vw;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

@media (max-width: (@small - 1)) and (min-width: (@x-small + 1)) and (orientation: portrait) {
  @card_size: 2.25vh;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

// M
@media (max-width: (@medium - 1)) and (min-width: (@small + 1)) and (orientation: landscape) {
  @card_size: 1vw;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

@media (max-width: (@medium - 1)) and (min-width: (@small + 1)) and (orientation: portrait) {
  @card_size: 2.75vh;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

// L
@media (max-width: (@large - 1)) and (min-width: (@medium + 1)) and (orientation: landscape) {
  @card_size: 2vw;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

@media(max-width: (@large - 1)) and (min-width: (@medium + 1)) and (orientation: portrait) {
  @card_size: 2.25vh;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

// XL
@media(min-width: @large) and (orientation: landscape) {
  @card_size: 2vw;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}

@media(min-width: @large) and (orientation: portrait) {
  @card_size: 2.25vh;
  @gameBoard_width: calc(@card_size * 6);
  @gameBoard_height: calc(@card_size * 3);
}
</style>
