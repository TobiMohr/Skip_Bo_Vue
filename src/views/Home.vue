<template>
    <q-page>
      <GameBoard></GameBoard>
    </q-page>
  </template>
  
  <style>
  </style>
  
  <script>
import { webSocketMixin } from '@/mixins/webSocketMixin';
import GameBoard from '@/components/GameBoard.vue';
  export default {
    name: "Skip_Bo",
    mixins: [webSocketMixin],
    components: {GameBoard},
    methods: {
            created() {
                this.getData();
                this.connectWebSocket();
            }
        }
  }
  </script>
  