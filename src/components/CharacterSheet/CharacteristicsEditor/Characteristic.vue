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
        const increase = level > this.value

        let cost = 0
        if(increase) {
          for(let x = this.value + 1; x <= level; x++) {
            cost += x * 10
          }
        } else {
          for(let x = this.value; x > level; x--) {
            cost -= x * 10
          }
        }

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
