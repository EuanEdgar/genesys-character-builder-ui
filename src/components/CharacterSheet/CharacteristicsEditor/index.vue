<template>
  <div>
    <h2>Characteristics</h2>
    <aside>You cannot edit characteristics after character creation.</aside>
    <b-container>
      <Characteristic
        v-for="characteristic in settingCharacteristics"
        :key="characteristic.key"
        :characteristic="characteristic"
        :value="characteristics[characteristic.key]"
        :availableXp="availableXp"
        :baseValue="baseCharacteristics[characteristic.key]"
        @change="onChange"
      />
    </b-container>
  </div>
</template>

<script lang="js">
import Characteristic from './Characteristic'

export default {
  props: [
    'settingCharacteristics',
    'characteristics',
    'baseCharacteristics',
    'availableXp',
  ],
  methods: {
    onChange({ characteristic, value, cost }) {
      const { characteristics } = this
      this.$emit('change', {
        characteristics: {
          ...characteristics,
          [characteristic]: value,
        },
        changeSpentXp: cost,
      })
    },
  },
  components: {
    Characteristic,
  },
}
</script>

<style lang="scss" scoped>
</style>
