<template>
  <b-row>
    <b-col cols="6">
      {{ name }}({{ characteristicName }})
    </b-col>
    <b-col cols="6">
      <input
        type="number"
        :min="baseValue"
        :max="maxLevel"
        :value="value"
        @change="onChange"
    </b-col>
  </b-row>
</template>

<script lang="js">
export default {
  props: [
    'skill',
    'value',
    'availableXp',
    'baseValue',
  ],
  computed: {
    name() {
      return this.skill.name
    },
    characteristicName() {
      // TODO
      return '???'
    },
  },
  onChange({ target: { value: level }}) {
    if(level !== this.value) {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
