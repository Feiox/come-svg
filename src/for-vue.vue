<template>
  <div class="svg-icon" :style="vars" v-html="content"/>
</template>

<script>
import icons from './icons'

export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '10px',
    },
    height: {
      type: String,
    },
    color: {
      type: String,
      default: '#888',
    },
  },
  computed: {
    content() {
      return icons[this.icon]
    },
    vars() {
      return {
        '--width': this.width,
        '--height': this.height || this.width,
        '--color': this.color,
      }
    }
  }
}
</script>

<style>
.svg-icon svg {
  width: var(--width);
  height: var(--height);
  line-height: var(--width);
  fill: var(--color);
  overflow: hidden;
}
</style>
