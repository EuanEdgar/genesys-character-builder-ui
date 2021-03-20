<template>
  <Loading :loading="loading">
    <div v-if="character">
      <CharacterSheet
        :id="characterId"
        @change="onChange"
      />
    </div>
    <div v-else>
      <h1>Character not found</h1>
    </div>
  </Loading>
</template>

<script>
import CharacterSheet from '@/components/CharacterSheet'
import Loading from '@/components/Loading'

export default {
  name: 'Character',
  created() {
    this.$store.dispatch('characters/load', this.characterId)
  },
  computed: {
    loading() {
      const {
        character,
        loadingCharacter,
        loadingSetting,
      } = this

      return loadingCharacter || loadingSetting
    },
    loadingCharacter() {
      const { characterId } = this
      return this.$store.getters['characters/loading'](characterId)
    },
    loadingSetting() {
      const { character } = this

      if(character) {
        const { settingId } = character

        return this.$store.getters['settings/loading'](settingId)
      }
    },
    characterId() {
      return parseInt(this.$router.currentRoute.params.characterId, 10);
    },
    character() {
      return this.$store.state.characters.characters[this.characterId]
    },
  },
  methods: {
    onChange(character) {
      this.$store.dispatch('characters/update', character)
    },
  },
  components: {
    CharacterSheet,
    Loading,
  },
}
</script>
