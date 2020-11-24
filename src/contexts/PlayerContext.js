import React, { createContext, useContext, useState } from "react";

const playerData = {
  floor: 6000000,
  pets: {
    "rock": { level: 8, isFavorite: true }
  },
  characters: { 
    "nurse": { level: 50 }
  },
  items: {
    "103": { level: 10, isFavorite: true }
  },
  relics: {
    "hp": { level: 210000, isFavorite: true },
    "nurse": { level: 100000, isFavorite: true }
  },
  teams: {
    "default": {
      name: "Default",
      pets: {
        "pet_1": { itemId: "rock" }
      },
      characters: {
        "character_1": {
          itemId: "nurse",
          slots: {
            "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "130" }
          }
        },
        "character_2": {
          itemId: "thief",
          slots: {
            "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { type: "accessory", itemId: "130" }
          }
        },
        "character_3": {
          itemId: "dual_wield",
          slots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { type: "accessory", itemId: "127" }
          }
        },
        "character_4": {
          itemId: "dual_wield",
          slots: {
            "weapon_1": { itemId: "103",  slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_5": {
          itemId: "dual_wield",
          slots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_6": {
          itemId: "dark_lord",
          slots: {
            "weapon_special_1": { itemId: "99" },
            "accessory_1": { itemId: "100" },
            "accessory_2": { itemId: "129" },
            "accessory_3": { itemId: "130" }
          }
        }
      }
    }
  }
};

const PlayerContext = createContext();

const PlayerProvider = ({children}) => {
  const [player, setPlayer] = useState(playerData);
  const value = { player };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}

const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('PlayerContext must be used with PlayerProvider!');
  }

  return context;
}

export { PlayerProvider, usePlayerContext };