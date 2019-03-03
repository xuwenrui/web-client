<template>
  <div v-bind:class="this['clazz']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'column',
  props: {
    'clazz': {
      type: String,
      default: ''
    }
  },
  created () {

  }
}
</script>
