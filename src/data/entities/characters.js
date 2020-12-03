export default {
  "character-soda_junkie": {
    type: "character",
    id: "soda_junkie",
    name: "Soda Junkie",
    maxLevel: 50,
    stats: {
      "hp": 62,
      "hp_boost": 0.09,
      "atk": 19,
      "atk_boost": 0.09,
      "mp": 16,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "evade": 0.08,
      "dmg_reduction": 0.02,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1,
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike"]
  },
  "character-carpenter": {
    type: "character",
    id: "carpenter",
    name: "Carpenter",
    maxLevel: 50,
    stats: {
      "hp": 63,
      "hp_boost": 0.09,
      "atk": 23,
      "atk_boost": 0.12,
      "mp": 23,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "evade": 0.04,
      "dmg_reduction": 0.04,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "sharpen", "swift_metal", "defend"]
  },
  "character-miner": {
    type: "character",
    id: "miner",
    name: "Miner",
    maxLevel: 50,
    stats: {
      "hp": 61,
      "hp_boost": 0.09,
      "atk": 20,
      "atk_boost": 0.09,
      "mp": 33,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "dmg_reduction": 0.02,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1,
      "ore_find": 27
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "transmute", "pickaxe", "defend"]
  },
  "character-nurse": { 
    type: "character",
    id: "nurse",
    name: "Nurse", 
    maxLevel: 50,
    stats: {
      "hp": 63,
      "hp_boost": 0.09,
      "atk": 19,
      "atk_boost": 0.09,
      "mp": 43,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "dmg_reduction": 0.02,
      "status_resist": 0.14,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    }, 
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "group_heal", "biohazard", "first_aid", "defend"]
  },
  "character-psychic": {
    type: "character",
    id: "psychic",
    name: "Mystic",
    maxLevel: 50,
    stats: {
      "hp": 65,
      "hp_boost": 0.09,
      "atk": 21,
      "atk_boost": 0.09,
      "mp": 41,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "magic_boost": 0.34,
      "phys_boost": 0.05,
      "dmg_reduction": 0.02,
      "status_resist": 0.02,
      "hp_regen": 6,
      "mp_regen": 9,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "recharge", "torment", "defend"]
  },
  "character-thief": {
    type: "character",
    id: "thief",
    name: "Thief",
    maxLevel: 50,
    stats: {
      "hp": 67,
      "hp_boost": 0.09,
      "atk": 20,
      "atk_boost": 0.09,
      "mp": 18,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "evade": 0.06,
      "dmg_reduction": 0.02,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "ransack", "pilfer", "defend"]
  },
  "character-huntress": {
    type: "character",
    id: "huntress",
    name: "Huntress",
    maxLevel: 50,
    stats: {
      "hp": 67,
      "hp_boost": 0.09,
      "atk": 20,
      "atk_boost": 0.09,
      "mp": 18,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "dmg_reduction": 0.02,
      "dmg_reflection": 0.16,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["strike", "mark", "defend"]
  },
  "character-darkmage": {
    type: "character",
    id: "darkmage",
    name: "Darkmage",
    maxLevel: 50,
    stats: {
      "hp": 69,
      "hp_boost": 0.09,
      "atk": 21,
      "atk_boost": 0.09,
      "mp": 43,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "magic_boost": 0.25,
      "phys_boost": 0.05,
      "dmg_reduction": 0.07,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    },
    equipmentSlots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["strike", "curse", "noxin", "defend"]
  },
  "character-dual_wield": {
    type: "character",
    id: "dual_wield",
    name: "Blademaster",
    maxLevel: 50,
    stats: {
      "hp": 70,
      "hp_boost": 0.09,
      "atk": 36,
      "atk_boost": 0.09,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "dmg_reduction": 0.07,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    },
    equipmentSlots: ["weapon_1", "weapon_2", "armor_1", "accessory_1"],
    skills: ["strike", "stun", "dual_strike"]
  },
  "character-dark_lord": {
    type: "character",
    subtype: "special",
    id: "dark_lord",
    name: "Dark Lord", 
    maxLevel: 50,
    stats: {
      "hp": 100,
      "hp_boost": 0.09,
      "atk": 38,
      "atk_boost": 0.09,
      "mp": 43,
      "crit_chance": 0.02,
      "crit_bonus": 0.07,
      "phys_boost": 0.05,
      "dmg_reduction": 0.07,
      "status_resist": 0.02,
      "hp_regen": 6,
      "essence_find": 0.03,
      "gold_find": 0.02,
      "item_find": 1
    }, 
    equipmentSlots: [{ id: "weapon_1", value: "aphotic_blade" }, "accessory_1", "accessory_2", "accessory_3"],
    skills: ["strike", "shadow_slicer_2", "defend"]
  },
  "character-chef": { 
    type: "character",
    subtype: "special",
    id: "chef",
    name: "Chef", 
    maxLevel: 50,
    stats: {
      "hp": 43,
      "hp_boost": 0.02,
      "atk": 14,
      "atk_boost": 0.02,
      "dmg_reduction": 0.05,
      "essence_find": 0.11,
      "gold_find": 0.20,
      "item_find": 10,
      "chance_for_dungeon_keys": 0.02,
      "ore_find": 4,
      "mastery_xp_boost": 0.07
    }, 
    equipmentSlots: [{ id: "weapon_1", value: "iron_skillet" }, "armor_1", "accessory_1"],
    skills: ["strike", "cook"]
  }
};