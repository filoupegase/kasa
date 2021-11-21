import React, { Component } from "react";
import Collapse from "../../_component/Collapse";
import Banner from "../../_component/Banner";
import ImageMountain from "../../assets/images/mountain-landscape.jpeg";


const ABOUT_DATA = [
  {
    title: "Fiabilité",
    collapsContent: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },
  {
    title: "Respect",
    collapsContent: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Service",
    collapsContent: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title: "Sécurité",
    collapsContent: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

class AboutUs extends Component {

  render() {
    return (
      <>
        <Banner
          imgSource={ImageMountain}
          altText="Un paysage de montagne"
        />
        {ABOUT_DATA.map(({ title, collapsContent }, index) => (
          <Collapse
            key={index}
            title={title}
            textArray={collapsContent}
          />))}
      </>
    );
  };
}

export default AboutUs;