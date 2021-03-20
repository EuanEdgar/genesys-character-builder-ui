<template>
  <div>
    <h1>{{ character.name }}</h1>
    <p>{{ totalXp - availableXp }} / {{ totalXp }}</p>
    <CharacteristicsEditor
      :characteristics="character.characteristics"
      :settingCharacteristics="setting.characteristics"
      :baseCharacteristics="species.characteristics"
      :availableXp="availableXp"
      @change="onChange"
    />
  </div>
</template>

<script lang="js">
import CharacteristicsEditor from './CharacteristicsEditor'

export default {
  props: ['id'],
  computed: {
    character() {
      return this.$store.state.characters.characters[this.id]
    },
    setting() {
      return this.$store.state.settings.settings[this.character.settingId]
    },
    species() {
      const {
        character: {
          speciesId,
        },
        setting: {
          species,
        },
      } = this

      return species.find(({ id }) => id === speciesId)
    },
    totalXp() {
      const {
        character: {
          earnedXp,
        },
        species,
      } = this

      const { xp: baseXp } = species

      return baseXp + earnedXp
    },
    availableXp() {
      const {
        character: {
          spentXp,
        },
        totalXp,
      } = this

      return totalXp - spentXp
    }
  },
  methods: {
    onChange(data) {
      const {
        changeSpentXp,
        ...updates
      } = data

      const {
        character,
      } = this

      this.$emit('change', {
        ...character,
        ...updates,
        spentXp: character.spentXp + changeSpentXp
      })
    },
  },
  components: {
    CharacteristicsEditor,
  }
}
</script>

<style lang="scss" scoped>
</style>
