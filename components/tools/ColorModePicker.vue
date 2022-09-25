<template>
  <div class="">
    <transition name="fade">
      <p v-show="!toggleColorModePicker">
        <ColorScheme placeholder="..." tag="span"  >
          <component
            :is="`icon-${this.$store.state.ui.color}`"
            @click="toggleColorModePicker = !toggleColorModePicker"
            style="width: 32px; height: 32px;"
          />
        </ColorScheme>
      </p>
    </transition>
    <transition name="bc">
      <ul v-show="toggleColorModePicker" class="color-mode__picker">
        <li v-for="color of colors" :key="color">
          <component
            :is="`icon-${color}`"
            @click="$store.commit('ui/preference', color); toggleColorModePicker = !toggleColorModePicker"
            style="width: 32px; height: 32px;"
          />
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'
import IconSepia from '@/assets/icons/sepia.svg?inline'

export default {
  computed: {
    uiColor() {
      return this.$store.state.ui.color
    }
  },
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia
  },
  data () {
    return {
      colors: ['system', 'light', 'dark', 'sepia'],
      toggleColorModePicker: false
    }
  },
  methods: {
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
  },
  mounted() {
  }

}

</script>
<style lang="scss">
.color-mode__picker {
  display: flex;
  flex-direction: column;
}
.bc-enter-active {
    animation: slideInDown 0.4s, fadeIn 0.4s;

}
.bc-leave-active {
    animation: slideOutUp 0.4s;
    transition: opacity 0.4s;
    opacity: 0;
}
.fade-enter-active {
    animation: jackInTheBox 0.4s;
    margin-top: 0px;
    transition: margin 0.4s;
}
.fade-leave-active {
    animation: fadeOut 0.4s;
    margin-top: -32px;
    transition: margin 0.4s;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: $dark-bgcolor;
  color: $dark-textcolor;
}
.sepia-mode body {
  background-color: $sepia-bgcolor;
  color: $sepia-textcolor;
}
a {
  color: $color-blue;
}
.dark-mode a {
  color:  $color-blue;
}
.sepia-mode a {
  color:  $color-blue;
}
</style>
