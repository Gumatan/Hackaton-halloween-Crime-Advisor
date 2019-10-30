import React from "react";
import "./Categories.scss";

const categorie = [
  {
    image: "nul.png",
    h2: "WTF"
  },
  {
    image: "zombie.jpg",
    h2: "Monsters"
  },
  {
    image: "paranormal.jpeg",
    h2: "Paranormal"
  },
  {
    image: "scream.jpg",
    h2: "Serial Killer"
  },
  {
    image: "mortco.jpeg",
    h2: "Several"
  },
  {
    image: "sang.jpg",
    h2: "Brutal"
  }
];

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="truc">
        {categorie.map(item => {
          return (
            <div id="container">
              <img src={item.image}></img>
              <h2 id="nom">{item.h2}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
