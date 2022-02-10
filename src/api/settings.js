export const loadSetting = (id) => {
  console.log(`Load setting with ID "${id}"`)

  return {
    id,
    name: 'Test setting',
    characteristics: [
      {
        name: "Agility",
        key: "agility"
      },
      {
        name: "Brawn",
        key: "brawn"
      },
      {
        name: "Cunning",
        key: "cunning"
      },
      {
        name: "Intellect",
        key: "intellect"
      },
      {
        name: "Presence",
        key: "presence"
      },
      {
        name: "Willpower",
        key: "willpower"
      }
    ],
    skills: [
      {
        name: "Alchemy",
        key: "alchemy",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Arcana",
        key: "arcana",
        characteristic: "???",
        group: 'magic',
      },
      {
        name: "Astrocartography",
        key: "astrocartography",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Athletics",
        key: "athletics",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Brawl",
        key: "brawl",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Charm",
        key: "charm",
        characteristic: "???",
        group: 'social',
      },
      {
        name: "Coercion",
        key: "coercion",
        characteristic: "???",
        group: 'social',
      },
      {
        name: "Computers",
        key: "computers",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Cool",
        key: "cool",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Coordination",
        key: "coordination",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Deception",
        key: "deception",
        characteristic: "???",
        group: 'social',
      },
      {
        name: "Discipline",
        key: "discipline",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Divine",
        key: "divine",
        characteristic: "???",
        group: 'magic',
      },
      {
        name: "Driving",
        key: "driving",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Gunnery",
        key: "gunnery",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Knowledge",
        key: "knowledge",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Leadership",
        key: "leadership",
        characteristic: "???",
        group: 'social',
      },
      {
        name: "Mechanics",
        key: "mechanics",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Medicine",
        key: "medicine",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Melee",
        key: "melee",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Melee (Heavy)",
        key: "melee-heavy",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Melee (Light)",
        key: "melee-light",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Negotiation",
        key: "negotiation",
        characteristic: "???",
        group: 'social',
      },
      {
        name: "Operating",
        key: "operating",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Perception",
        key: "perception",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Piloting",
        key: "piloting",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Primal",
        key: "primal",
        characteristic: "???",
        group: 'magic',
      },
      {
        name: "Ranged",
        key: "ranged",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Ranged (Heavy)",
        key: "ranged-heavy",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Ranged (Light)",
        key: "ranged-light",
        characteristic: "???",
        group: 'combat',
      },
      {
        name: "Resilience",
        key: "resilience",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Riding",
        key: "riding",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Skulduggery",
        key: "skulduggery",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Stealth",
        key: "stealth",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Streetwise",
        key: "streetwise",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Survival",
        key: "survival",
        characteristic: "???",
        group: 'general',
      },
      {
        name: "Vigilance",
        key: "vigilance",
        characteristic: "???",
        group: 'general',
      }
    ],
    skillGroups: [
      {
        key: 'social',
        name: 'Social',
      },
      {
        key: 'combat',
        name: 'Combat',
      },
      {
        key: 'magic',
        name: 'Magic',
      },
      {
        key: 'general',
        name: 'General',
      },
    ],
    species: [
      {
        id: 1,
        name: 'Average Human',
        characteristics: {
          agility: 2,
          brawn: 2,
          cunning: 2,
          intellect: 2,
          presence: 2,
          willpower: 2,
        },
        xp: 200,
      },
    ],
  }
}
