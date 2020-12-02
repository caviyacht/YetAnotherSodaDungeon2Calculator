import React, { createContext, useContext, useReducer } from "react";
import { useDataContext } from "./DataContext";

const PlayerContext = createContext();

const getSlotsTemplateForItem = (item) =>
  (item.equipmentSlots || item.slots || []).reduce((result, value) => {
    if (value instanceof Object) {
      result[value.id] = { itemId: value.itemId };
    }
    else {
      result[value] = { itemId: null };
    }

    return result;
  }, {});

const createSlots = (currentSlots, item) =>
  Object.entries(currentSlots || {}).reduce((result, [id, value]) => {
    if (result[id] && !result[id].itemId) {
      result[id] = { ...value };
    }

    return result;
  }, getSlotsTemplateForItem(item));

const createMember = (currentMember, itemId, dataContext) => {
  if (itemId === "") {
    return { itemId: null };
  }
  
  const item = dataContext.items[itemId];

  // TODO: Find a better way without hardcoding this value.
  if (item.type === "pet") {
    return { itemId };
  }

  return {
    itemId,
    equipmentSlots: createSlots(currentMember.equipmentSlots, item)
  };
};

const createMemberEquipmentSlot = (currentEquipmentSlot, itemId, dataContext) => {
  if (itemId === "") {
    return { itemId: null };
  }

  return {
    itemId,
    slots: createSlots(currentEquipmentSlot.slots, dataContext.items[itemId])
  };
}

const createMemberEquipmentSlotSlot = (currentSlot, itemId, dataContext) => {
  if (itemId === "") {
    return { itemId: null };
  }
  
  return { itemId };
}

const setMember = (state, { teamId, memberId, itemId }, dataContext) => ({
  ...state,
  teams: {
    ...state.teams,
    [teamId]: {
      ...state.teams[teamId],
      members: {
        ...state.teams[teamId].members,
        [memberId]: createMember(state.teams[teamId].members[memberId], itemId, dataContext)
      }
    }
  }
});

const setMemberEquipmentSlot = (state, { teamId, memberId, equipmentSlotId, itemId }, dataContext) => ({
  ...state,
  teams: {
    ...state.teams,
    [teamId]: {
      ...state.teams[teamId],
      members: {
        ...state.teams[teamId].members,
        [memberId]: {
          ...state.teams[teamId].members[memberId],
          equipmentSlots: {
            ...state.teams[teamId].members[memberId].equipmentSlots,
            [equipmentSlotId]: createMemberEquipmentSlot(
              state.teams[teamId].members[memberId].equipmentSlots[equipmentSlotId],
              itemId,
              dataContext)
          }
        }
      }
    }
  }
});

const setMemberEquipmentSlotSlot = (state, { teamId, memberId, equipmentSlotId, slotId, itemId }, dataContext) => ({
  ...state,
  teams: {
    ...state.teams,
    [teamId]: {
      ...state.teams[teamId],
      members: {
        ...state.teams[teamId].members,
        [memberId]: {
          ...state.teams[teamId].members[memberId],
          equipmentSlots: {
            ...state.teams[teamId].members[memberId].equipmentSlots,
            [equipmentSlotId]: {
              ...state.teams[teamId].members[memberId].equipmentSlots[equipmentSlotId],
              slots: {
                ...state.teams[teamId].members[memberId].equipmentSlots[equipmentSlotId].slots,
                [slotId]: createMemberEquipmentSlotSlot(
                  state.teams[teamId].members[memberId].equipmentSlots[equipmentSlotId].slots[slotId],
                  itemId,
                  dataContext)
              }
            }
          }
        }
      }
    }
  }
});

const reducer = dataContext => (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TEAM_MEMBER":
      return setMember(state, payload, dataContext);

    case "SET_TEAM_MEMBER_EQUIPMENT_SLOT":
      return setMemberEquipmentSlot(state, payload, dataContext);;

    case "SET_TEAM_MEMBER_EQUIPMENT_SLOT_SLOT":
      return setMemberEquipmentSlotSlot(state, payload, dataContext);

    case "SET_FLOOR":
      return {
        ...state,
        floor: payload.floor
      };

    case "SET_ITEM_LEVEL":
      return {
        ...state,
        items: {
          ...state.items,
          [payload.itemId]: {
            ...state.items[payload.itemId],
            level: payload.level
          }
        }
      };

    case "SET_RELIC_LEVEL":
      return {
        ...state,
        relics: {
          ...state.relics,
          [payload.relicId]: {
            ...state.relics[payload.relicId],
            level: payload.level
          }
        }
      };

    case "ADD_TEAM":
      return {
        ...state,
        teams: {
          ...state.teams,
          [payload.id]: {
            name: payload.name,
            members: {
              "pet_1": { itemId: null },
              "character_1": { itemId: null },
              "character_2": { itemId: null },
              "character_3": { itemId: null },
              "character_4": { itemId: null },
              "character_5": { itemId: null },
              "character_6": { itemId: null }
            }
          }
        }
      };

    case "REMOVE_TEAM":
      const { [payload.id]: team, ...teams } = state.teams;

      return {
        ...state,
        teams
      };

    default: throw new Error();
  }
};

const PlayerProvider = ({data, children}) => {
  const dataContext = useDataContext();
  const [player, dispatch] = useReducer(reducer(dataContext), data);
  const value = { player, dispatch };

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