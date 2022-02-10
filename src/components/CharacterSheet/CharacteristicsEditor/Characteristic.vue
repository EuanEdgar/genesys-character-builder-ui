<template>
  <b-row>
    <b-col cols="8">
      {{ name }}
    </b-col>
    <b-col>
      <input
        type="number"
        :value="value"
        :min="minLevel"
        :max="maxLevel"
        @change="onChange"
      />
    </b-col>
  </b-row>
</template>

<script lang="js">
import summation from '@/utils/summation'

export default {
  props: [
    'characteristic',
    'value',
    'availableXp',
    'baseValue',
  ],
  computed: {
    name() {
      return this.characteristic.name
    },
    key() {
      return this.characteristic.key
    },
    minLevel() {
      const { baseValue } = this

      return baseValue
    },
    maxLevel() {
      const {
        value,
        availableXp,
      } = this

      let maxLevel = value
      let currentXp = availableXp
      while(currentXp >= (value + 1) * 10) {
        maxLevel += 1
        currentXp -= (value + 1) * 10
      }

      return Math.min(5, maxLevel)
    },
  },
  methods: {
    onChange(event) {
      const { target: { value }} = event

      const level = parseInt(value, 10)

      if(level !== this.value) {
        const cost = (summation(level) - summation(this.value)) * 10

        this.$emit('change', {
          characteristic: this.key,
          value: level,
          cost,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
