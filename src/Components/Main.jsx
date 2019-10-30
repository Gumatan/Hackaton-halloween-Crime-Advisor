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
        <img className="gif" src={this.state.imgSrc} alt="gif"></img>
      </div>
    );
  }
}
export default Main;
