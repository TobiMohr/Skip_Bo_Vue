<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Skip Bo</div>
      </div>
      <q-img
        src="images/header_img.jpg"
        class="header-image absolute-top" />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 164px); margin-top: 164px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
              to="/"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item 
              to="/RulePage"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Rules
              </q-item-section>
            </q-item>

            <q-item 
              to="/GameBoard"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="controller" />
              </q-item-section>

              <q-item-section>
                Game
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="images/header_img.jpg" style="height: 164px">
        </q-img>
      </q-drawer>

    <q-page-container>
        <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',

  components: {
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
  }
</style>
