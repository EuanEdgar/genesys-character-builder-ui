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
        name: "alchemy",
        key: "alchemy",
        characteristic: "???"
      },
      {
        name: "arcana",
        key: "arcana",
        characteristic: "???"
      },
      {
        name: "astrocartography",
        key: "astrocartography",
        characteristic: "???"
      },
      {
        name: "athletics",
        key: "athletics",
        characteristic: "???"
      },
      {
        name: "brawl",
        key: "brawl",
        characteristic: "???"
      },
      {
        name: "charm",
        key: "charm",
        characteristic: "???"
      },
      {
        name: "coercion",
        key: "coercion",
        characteristic: "???"
      },
      {
        name: "computers",
        key: "computers",
        characteristic: "???"
      },
      {
        name: "cool",
        key: "cool",
        characteristic: "???"
      },
      {
        name: "coordination",
        key: "coordination",
        characteristic: "???"
      },
      {
        name: "deception",
        key: "deception",
        characteristic: "???"
      },
      {
        name: "discipline",
        key: "discipline",
        characteristic: "???"
      },
      {
        name: "divine",
        key: "divine",
        characteristic: "???"
      },
      {
        name: "driving",
        key: "driving",
        characteristic: "???"
      },
      {
        name: "gunnery",
        key: "gunnery",
        characteristic: "???"
      },
      {
        name: "knowledge",
        key: "knowledge",
        characteristic: "???"
      },
      {
        name: "leadership",
        key: "leadership",
        characteristic: "???"
      },
      {
        name: "mechanics",
        key: "mechanics",
        characteristic: "???"
      },
      {
        name: "medicine",
        key: "medicine",
        characteristic: "???"
      },
      {
        name: "melee",
        key: "melee",
        characteristic: "???"
      },
      {
        name: "melee",
        key: "melee",
        characteristic: "???"
      },
      {
        name: "melee",
        key: "melee",
        characteristic: "???"
      },
      {
        name: "negotiation",
        key: "negotiation",
        characteristic: "???"
      },
      {
        name: "operating",
        key: "operating",
        characteristic: "???"
      },
      {
        name: "perception",
        key: "perception",
        characteristic: "???"
      },
      {
        name: "piloting",
        key: "piloting",
        characteristic: "???"
      },
      {
        name: "primal",
        key: "primal",
        characteristic: "???"
      },
      {
        name: "ranged",
        key: "ranged",
        characteristic: "???"
      },
      {
        name: "ranged",
        key: "ranged",
        characteristic: "???"
      },
      {
        name: "ranged",
        key: "ranged",
        characteristic: "???"
      },
      {
        name: "resilience",
        key: "resilience",
        characteristic: "???"
      },
      {
        name: "riding",
        key: "riding",
        characteristic: "???"
      },
      {
        name: "skulduggery",
        key: "skulduggery",
        characteristic: "???"
      },
      {
        name: "stealth",
        key: "stealth",
        characteristic: "???"
      },
      {
        name: "streetwise",
        key: "streetwise",
        characteristic: "???"
      },
      {
        name: "survival",
        key: "survival",
        characteristic: "???"
      },
      {
        name: "vigilance",
        key: "vigilance",
        characteristic: "???"
      }
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
