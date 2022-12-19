<template>
    <q-page>
        <div class="board">
            <div class ="flexContainer">
                <div class="firstChild">
                    <span> Karten auf der Hand</span> 
                    <br>
                    <img v-if="spielerErsteKarte === '0'" v-bind:src="'images/' + spielerErsteKarte + 'Card.png'" class = "playerCards">
                    <img v-else-if="selectedCard == 2" v-bind:src="'images/' + spielerErsteKarte + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Hand',1)">
                    <img v-else v-bind:src="'images/' + spielerErsteKarte + 'Card.png'" class = "playerCards" @click="selectCard('Hand',1)">

                    <img v-if="spielerZweiteKarte === '0'" v-bind:src="'images/' + spielerZweiteKarte + 'Card.png'" class = "playerCards">
                    <img v-else-if="selectedCard == 3" v-bind:src="'images/' + spielerZweiteKarte + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Hand',2)">
                    <img v-else v-bind:src="'images/' + spielerZweiteKarte + 'Card.png'" class = "playerCards" @click="selectCard('Hand',2)">
                    
                    <img v-if="spielerDritteKarte === '0'" v-bind:src="'images/' + spielerDritteKarte + 'Card.png'" class = "playerCards">
                    <img v-else-if="selectedCard == 4" v-bind:src="'images/' + spielerDritteKarte + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Hand',3)">
                    <img v-else v-bind:src="'images/' + spielerDritteKarte + 'Card.png'" class = "playerCards" @click="selectCard('Hand',3)">

                    <img v-if="spielerVierteKarte === '0'" v-bind:src="'images/' + spielerVierteKarte + 'Card.png'" class = "playerCards">
                    <img v-else-if="selectedCard == 5" v-bind:src="'images/' + spielerVierteKarte + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Hand',4)">
                    <img v-else v-bind:src="'/images/' + spielerVierteKarte + 'Card.png'" class = "playerCards" @click="selectCard('Hand',4)">

                    <img v-if="spielerFünfteKarte === '0'" v-bind:src="'images/' + spielerFünfteKarte + 'Card.png'" class = "playerCards">
                    <img v-else-if="selectedCard == 6" v-bind:src="'images/' + spielerFünfteKarte + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Hand',5)">
                    <img v-else v-bind:src="'images/' + spielerFünfteKarte + 'Card.png'" class = "playerCards" @click="selectCard('Hand',5)">
                </div>
                <div class="secondChild">
                    <span> SpielerStapel </span>
                    <br>
                    <img v-if="selectedCard == 1" v-bind:src="'images/' + spielerStapel_Value + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Spielerstapel', 0)">
                    <img v-else v-bind:src="'images/' + spielerStapel_Value + 'Card.png'" class = "playerCards" @click="selectCard('Spielerstapel', 0)">
                    <span>{{spielerStapel_Size}}</span>
                </div>
            </div>

            <p> Hilfekarten </p>
            <img v-if="selectedCard == 7 && whichStack === 'Help'" v-bind:src="'images/' + hilfeStapel1 + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Help', 1)">
            <img v-else v-bind:src="'images/' + hilfeStapel1 + 'Card.png'" class = "playerCards" @click="selectCard('Help', 1)">

            <img v-if="selectedCard == 8 && whichStack === 'Help'" v-bind:src="'images/' + hilfeStapel2 + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Help', 2)">
            <img v-else v-bind:src="'images/' + hilfeStapel2 + 'Card.png'" class = "playerCards" @click="selectCard('Help', 2)">

            <img v-if="selectedCard == 9 && whichStack === 'Help'" v-bind:src="'images/' + hilfeStapel3 + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Help', 3)">
            <img v-else v-bind:src="'images/' + hilfeStapel3 + 'Card.png'" class = "playerCards" @click="selectCard('Help', 3)">

            <img v-if="selectedCard == 10 && whichStack === 'Help'" v-bind:src="'images/' + hilfeStapel4 + 'Card.png'" class = "playerCardsSelected" @click="selectCard('Help', 4)">
            <img v-else v-bind:src="'images/' + hilfeStapel4 + 'Card.png'" class = "playerCards" @click="selectCard('Help', 4)">

            <p> Abgelegene Karten </p>
            <img v-bind:src="'images/' + ablageStapel1 + 'Card.png'" class = "playerCards" @click="placeCard('Ablage', 1)">
            <img v-bind:src="'images/' + ablageStapel2 + 'Card.png'" class = "playerCards" @click="placeCard('Ablage', 2)">
            <img v-bind:src="'images/' + ablageStapel3 + 'Card.png'" class = "playerCards" @click="placeCard('Ablage', 3)">
            <img v-bind:src="'images/' + ablageStapel4 + 'Card.png'" class = "playerCards" @click="placeCard('Ablage', 4)">
        </div>

        <div name="statusMessage" class="statusMessage">
            <h2>{{ current_Player }}s turn</h2>
        </div>
    </q-page>
  </template>
  
  <style>

.header {
    height: 100px;
    padding: 10px;
    margin: 10px;
    border-width: 10px;
    border-style: solid;

}

.player {
    margin: 10px;
    float: right;
}

.playerIcon {
    height: 60px;
    width: 60px;
}

.board {
    background-color: #008040;
    padding: 10px;
    text-align: center;
    border-width: 8px;
    border-style: solid;
    border-color: #80471C;
}

.boardgap {
    background-color: #008040;
}

.spielerStapel {
    background-color: #008040;
}

.hand {
    background-color: #008040;
}

.helpstacks {
    background-color: #008040;
}

.ablageStapel {
    background-color: #008040;
}

.gameInput {
    background-color: white;
}

.gameState {
    text-align: center;
    font-size: 20px;
    margin: 20px;
}

.playerCards {
    margin: 20px;
}

.playerCardsSelected {
    margin: 20px;
    border: 5px solid red;
}

.flexContainer {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.firstChild {
    background-color: #008040;
    padding: 10px;
    text-align: right;
    border-width: 8px;
    border-style: solid;
    border-color: #80471C;
}

.secondChild {
    background-color: #008040;
    padding: 10px;
    text-align: left;
    border-width: 8px;
    border-style: solid;
    border-color: #80471C;
}

.statusMessage {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
}

</style>
  
<script>
    import { webSocketMixin } from '@/mixins/webSocketMixin'; 

    export default {
        name: "GameBoard",
        mixins: [webSocketMixin],
        created() {
            this.connectWebSocket();
        }
    }
</script>
  