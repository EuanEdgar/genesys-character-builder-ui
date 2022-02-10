<template>
  <div>
    <h2>Skills</h2>
    <b-container>
      <SkillGroup
        v-for="group in settingSkillGroups"
        :key="group"
        :settingSkills="groupedSkills[group.key]"
        :skills="skills"
        :group="group"
        :baseSkills="baseSkills"
        :availableXp="availableXp"
        @change="onChange"
      />
    </b-container>
  </div>
</template>

<script lang="js">
import groupBy from 'spiceutils/dist/groupBy'

import SkillGroup from './SkillGroup'

export default {
  props: [
    'settingSkills',
    'skills',
    'baseSkills',
    'availableXp',
  ],
  computed: {
    groupedSkills() {
      const { settingSkills } = this
      return groupBy(settingSkills, ({ group }) => group || 'general')
    },
  },
  methods: {
    onChange() {
      debugger
    }
  }
  components: {
    SkillGroup,
  }
}
</script>

<style lang="scss" scoped>
</style>
