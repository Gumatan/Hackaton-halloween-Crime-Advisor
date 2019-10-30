import React from "react";

class Son extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [
        "./images/thunder.gif",
        "./images/doll.gif",
        "./images/lamort.gif",
        "./images/fille.gif"
      ],
      i: 0,
      imgSrc: "./images/thunder.gif"
    };
    setInterval(() => {
      this.setState({
        i: this.state.i + 1,
        imgSrc: this.state.imgs[this.state.i % this.state.imgs.length]
      });
    }, 3000);
  }

  render() {
    return (
      <div>
          <audio title="Noir Désir" preload="auto" controls loop>
         <source src="medias/le_vent_nous_portera.mp3" type="audio/mp3">
      </div>
    );
  }
}
export default Son;
