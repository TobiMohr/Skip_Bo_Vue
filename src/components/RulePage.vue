<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Regeln</h5>
    <p>Während eines Zuges kann der Spieler Karten aus der Hand/Hilfsstapel/Spielerstapel auf die Ablagestapel legen. Hierbei gilt der Kartenwert, der abzulegenden Karte muss 1 höher sein, als der aktuelle Wert des Ablagestapels. So kann man beispielsweise auf eine 3 nur eine 4 ablegen. Joker sind hierbei die Ausnahme. Sie können immer abgelegt werden, egal was der aktuelle Wert auf dem Stapel betrifft. Wenn ein Ablagestapel voll ist(12 Karten), dann werden die 12 Karten in den Aufnahmestapel gemischt.

    Hilfsstapel sind sogesehen Platzhalter für Karten. Man kann nur Karten aus der Hand auf die Hilfsstapel legen. Man legt beispielsweise wenn man nicht auf einen Ablagestapel legen kann, Karten auf die Hilfsstapel. Es gibt keine Regeln wie man auf Hilfsstapel ablegen darf. Wichtig hierbei ist aber, dass man nur die oberste Karte vom jeweiligen Hilfsstapel auf einen Ablagestapel legen darf. Außerdem legt man eine Karte von der Hand auf einen Hilfsstapel, ist der Zug automatisch beendet.

    Der Zug ist auch automatisch beendet, wenn der Spieler keine Handkarten mehr hat. Zu Beginn jedes Zuges zieht ein Spieler solange vom Aufnahmestapel, bis es 5 Karten auf der Hand hat.</p>

    <h5>Ziel</h5>

  <p>Der Spieler der zuerst alle Karten aus seinem Spielerstapel, auf Ablagestapel gelegt hat gewinnt das Spiel.</p>
  </q-page>
</template>
  
<style>
</style>
  
<script>
  export default {
  }
</script>
  