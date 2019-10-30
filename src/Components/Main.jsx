import React from "react";
import "./Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        "./images/thunder.gif",
        "./images/doll.gif",
        "./images/lamort.gif",
        "./images/fille.gif"
      ],

      sounds: [
        "./sons/thunder.mp3",
        "./sons/doll.mp3",
        "./sons/crow.mp3",
        "./sons/run.mp3"
      ],
      i: 0,
      soundSrc: "./sons/thunder.mp3",
      imgSrc: "./images/thunder.gif"
    };
    setInterval(() => {
      this.setState({
        i: this.state.i + 1,
        imgSrc: this.state.imgs[this.state.i % this.state.imgs.length],
        soundSrc: this.state.sounds[this.state.i % this.state.sounds.length]
      });
    }, 3000);
  }

  render() {
    // Pour checker:
    console.log("Current index: ", this.state.i);
    console.log(
      "Current index % arrays length: ",
      this.state.i % this.state.imgs.length
    );
    console.log("Current gif: ", this.state.imgSrc);
    console.log("Current sound: ", this.state.soundSrc);
    return (
      <div>
        <img className="gif" src={this.state.imgSrc} alt="gif"></img>
        <audio autoPlay preload="auto" loop src={this.state.soundSrc}></audio>
      </div>
    );
  }
}
export default Main;
