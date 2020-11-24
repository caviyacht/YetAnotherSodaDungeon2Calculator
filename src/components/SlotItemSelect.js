import React from "react";
import { FormControl } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";

export default ({slot, setItem, ...props}) => {
  const dataContext = useDataContext();

  return (
    <FormControl as="select" onChange={e => setItem(e.target.value)}>
      <option value="">{`<Empty>`}</option>

      {getItemsForSlot(slot, dataContext).map(item =>
        <option value={item.id} selected={item.id === slot.item.itemId}>{item.name}</option>
      )}
    </FormControl>
  );
}

const getItemsForSlot = (slot, dataContext) =>
  Object
    .keys(dataContext[slot.collection])
    .map(id => ({
      id,
      ...dataContext[slot.collection][id]
    }));