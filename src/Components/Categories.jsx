import React from "react";
import "./Categories.scss";

const categorie = [
  {
    image: "nul.png",
    h2: "WTF"
  },
  {
    image: "zombie.jpg",
    h2: "Monstres"
  },
  {
    image: "paranormal.jpeg",
    h2: "Paranormal"
  },
  {
    image: "scream.jpg",
    h2: "Serial killer"
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
        <h1>Types of death : </h1>
        {categorie.map(item => {
          return (
            <div onClick={this.props.handleClick} id="container">
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
