import React from "react";
import { useParams } from "react-router-dom";
import HousingView from "../HousingView";


export default function Housing({ advertisementsList }) {
  const { id } = useParams();
  return <HousingView advertisementsList={advertisementsList} id={id} />;
}
