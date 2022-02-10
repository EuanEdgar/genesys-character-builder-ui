<template>
  <div>
    <h3>{{ group.name }} Skills</h3>
    <b-container>
      <Skill
        v-for="skill in settingSkills"
        :skill="skill"
        :value="skills[skill.key]"
        :availableXp="availableXp"
        :baseValue="baseSkills[skill.key]"
      />
    </b-container>
  </div>
</template>

<script lang="js">
import Skill from './Skill'

export default {
  props: [
    'skills',
    'settingSkills',
    'group',
    'baseSkills',
    'availableXp',
  ],
  components: {
    Skill,
  }
}
</script>

<style lang="scss" scoped>
</style>
