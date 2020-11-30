import React from "react";
import { Col,  FormControl, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import FormGroupImage from "./FormGroupImage";
import { useDataContext } from "../contexts/DataContext";
import { usePlayerContext } from "../contexts/PlayerContext";

export default ({...props}) => {
  const dataContext = useDataContext();
  const playerContext = usePlayerContext();

  const pets = getpets(playerContext, dataContext);

  return (
    <Row xs={1} lg={2}>
      {pets.map(pet =>
        <Col className="d-flex">
          <div className="mr-2" style={{flex: "0 0 70px"}}>
            <FormGroupImage src={pet.item.image} rounded />
          </div>

          <FormGroup className="w-100">
            <FormLabel htmlFor={`pet-${pet.id}`}>{pet.item.name}</FormLabel>
            <InputGroup>
              <FormControl id={`pet-${pet.id}`} type="number" min="1" max="50" value={pet.item.level} />

              <InputGroup.Append>
                <InputGroup.Text className="bg-dark text-light">{"/" + pet.item.maxLevel}</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </FormGroup>
        </Col>
      )}
    </Row>
  );
}

const getpets = (playerContext, dataContext) =>
  Object
    .entries(dataContext.items)
    .filter(([id, item]) => item.type === "pet")
    .map(([id, item]) => {
      const playerPet = playerContext.player.items[id] || {};

      return {
        id,
        item: {
          ...item,
          image: dataContext.images.pets[id],
          ...playerPet
        }
      };
    });