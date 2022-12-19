import $ from "jquery";

export const webSocketMixin = {
data: function () {
    console.log("test")
    return {
        websocketVUE: new WebSocket("ws://localhost:9000/websocket"),
        data: {},
        playerA_Spielerstapel_Value: " ",
        playerA_Spielerstapel_Size: 0,
        playerB_Spielerstapel_Value: " ",
        playerB_Spielerstapel_Size: 0,
        ablageStapel1: "0",
        ablageStapel2: "0",
        ablageStapel3: "0",
        ablageStapel4: "0",
        current_Player: " ",
        gameState: " ",
        statusmessage: " ",

        spielerStapel_Value: "",
        spielerStapel_Size: 0,

        spielerErsteKarte: "0",
        spielerZweiteKarte: "0",
        spielerDritteKarte: "0",
        spielerVierteKarte: "0",
        spielerFünfteKarte: "0",

        hilfeStapel1: "0",
        hilfeStapel2: "0",
        hilfeStapel3: "0",
        hilfeStapel4: "0",

        selectedCard: 0,
        whichStack: "",
        whichCard: null,
    }
},
methods: {
    connectWebSocket() {

        this.websocketVUE.onopen = () => {
            this.websocketVUE.send("Trying to connect to Server");
            console.log("open websocket");
        };

        this.websocketVUE.onclose = () => {
            console.log("closed")
        };

        this.websocketVUE.onerror = () => {
            console.log("error")
        };

        this.websocketVUE.onmessage = (e) => {
            console.log("onmessage: ")
            console.log(e.data)
            if (typeof e.data === "string") {
                this.data = JSON.parse(e.data)
                this.getData(e.data);
                console.log(e);
            }
        };
    },
    getData() {
        let that = this;
        return $.ajax({
            method: "GET",
            mode: 'cors',
            url: "http://localhost:9000/status",
            dataType: "json",
            success: function (response) {
                that.data = response;
                that.playerA_Spielerstapel_Value = response.playerA_Spielerstapel_Value;
                that.playerA_Spielerstapel_Size = response.playerA_Spielerstapel_Size;
                that.playerB_Spielerstapel_Value = response.playerB_Spielerstapel_Value;
                that.playerB_Spielerstapel_Size = response.playerB_Spielerstapel_Size;
                that.ablageStapel1 = response.ablagestapel_0;
                that.ablageStapel2 = response.ablagestapel_1;
                that.ablageStapel3 = response.ablagestapel_2;
                that.ablageStapel4 = response.ablagestapel_3;
                that.current_Player = response.current_Player;
                that.gameState = response.gamestate;
                that.statusmessage = response.statusmessage;
                that.selectedCard = 0;
                that.whichCard = null;
                that.whichStack = "";
                that.loadPlayerCards();
                that.loadHelpStack();
                that.loadAblageStack();
                that.loadSpielerStack();
            }
        });
    },
    loadPlayerCards() {
        if (this.current_Player === "Player A") {
            this.spielerErsteKarte = this.data.playerA_Hand_0;
            this.spielerZweiteKarte = this.data.playerA_Hand_1;
            this.spielerDritteKarte = this.data.playerA_Hand_2;
            this.spielerVierteKarte = this.data.playerA_Hand_3;
            this.spielerFünfteKarte = this.data.playerA_Hand_4;
        } else {
            this.spielerErsteKarte = this.data.playerB_Hand_0;
            this.spielerZweiteKarte = this.data.playerB_Hand_1;
            this.spielerDritteKarte = this.data.playerB_Hand_2;
            this.spielerVierteKarte = this.data.playerB_Hand_3;
            this.spielerFünfteKarte = this.data.playerB_Hand_4;
        }
    },

    loadHelpStack() {
        if (this.current_Player === "Player A") {
            this.hilfeStapel1 = this.data.playerA_HelpStacks_0;
            this.hilfeStapel2 = this.data.playerA_HelpStacks_1;
            this.hilfeStapel3 = this.data.playerA_HelpStacks_2;
            this.hilfeStapel4 = this.data.playerA_HelpStacks_3;
        } else {
            this.hilfeStapel1 = this.data.playerB_HelpStacks_0;
            this.hilfeStapel2 = this.data.playerB_HelpStacks_1;
            this.hilfeStapel3 = this.data.playerB_HelpStacks_2;
            this.hilfeStapel4 = this.data.playerB_HelpStacks_3;
        }
    },

    loadAblageStack() {
        this.ablageStapel1 = this.data.ablagestapel_0;
        this.ablageStapel2 = this.data.ablagestapel_1;
        this.ablageStapel3 = this.data.ablagestapel_2;
        this.ablageStapel4 = this.data.ablagestapel_3;
    },

    loadSpielerStack() {
        if (this.current_Player === "Player A") {
            this.spielerStapel_Value = this.data.playerA_Spielerstapel_Value;
            this.spielerStapel_Size = this.data.playerA_Spielerstapel_Size;
        } else {
            this.spielerStapel_Value = this.data.playerB_Spielerstapel_Value;
            this.spielerStapel_Size = this.data.playerB_Spielerstapel_Size;
        }
    },
    processCmdWS(cmd, data1, data2) {
        console.log("process " + cmd + "|" + data1 + "|" + data2)
        this.websocketVUE.send(cmd + "|" + data1 + "|" + data2)
    },
    selectCard(stacktype, index) {
        console.log(stacktype);
        if(stacktype === 'Spielerstapel'){
            if (this.selectedCard == 1){
                this.selectedCard = 0;
                this.whichStack = "";
            } else {
                this.selectedCard = 1;
                this.whichStack = "Spielerstapel";
                this.whichCard = index;
            }
        } else if (stacktype === 'Hand'){
            if(this.selectedCard == index + 1){
                this.selectedCard = 0;
                this.whichStack = "";
                this.whichCard = null;
            } else {
                this.selectedCard = index + 1;
                this.whichStack = "Hand";
                this.whichCard = index;
            }
        } else if (stacktype === 'Help'){
            if(this.selectedCard == 0){
                if (index == 1){
                    if((this.whichCard == null && (this.hilfeStapel1 == "0"))){
                        return;
                    }
                } else if (index == 2){
                    console.log(this.whichCard +"  " + this.hilfeStapel2);
                    if((this.whichCard == null && (this.hilfeStapel2 == "0"))){
                        return;
                    }
                } else if (index == 3){
                    if((this.whichCard == null && (this.hilfeStapel3 == "0"))){
                        return;
                    }
                } else if (index == 4){
                    if((this.whichCard == null && (this.hilfeStapel4 == "0"))){
                        return;
                    }
                }
                this.selectedCard = index + 6;
                this.whichStack = "Help";
                this.whichCard = index;
            } else if (this.selectedCard == index + 6){
                this.selectedCard = 0;
                this.whichStack = "";
                this.whichCard = null;
                console.log("hier");
            } else {
                this.placeCard('Help', index);
            }
        }
    },
    placeCard(stacktype, index){
        console.log("whichCard: " + this.whichCard);
        console.log("whichStack: " + this.whichStack);
        console.log("selectedCard: " + this.selectedCard);
        if (this.whichCard == null){
            return;
        }
        if (stacktype === 'Help'){
            if (this.whichStack === "Spielerstapel"){
                return;
            } else if (this.whichStack === "Hand"){
                this.processCmdWS("hand_Hilfestapel", this.whichCard, index);
            }
        }
        if (stacktype === 'Ablage'){
            if (this.whichStack === "Spielerstapel"){
                console.log("hiii");
                this.processCmdWS("spielerstapel_Ablagestapel", index, ".");
            }
            if (this.whichStack === "Hand"){
                this.processCmdWS("hand_Ablagestapel", this.whichCard, index);
            }
            if (this.whichStack === "Help"){
                this.processCmdWS("hilfestapel_Ablagestapel", this.whichCard, index);
            }
        }
    }
}
}
