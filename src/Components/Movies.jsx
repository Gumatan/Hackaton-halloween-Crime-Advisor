import React from "react";
import "./Movies.scss";
import { tsImportEqualsDeclaration } from "@babel/types";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    let price = "";

    switch (this.props.category) {
      case "WTF":
        price = "10 000";
        break;
      case "Paranormal":
        price = "8 000";
        break;
      case "Serial killer":
        price = "6 000";
        break;
      case "Several":
        price = "7 500";
        break;
      case "Monstres":
        price = "9 000";
        break;
      case "Brutal":
        price = "2 500";
        break;
      default:
        price = "1 000 000";
        break;
    }

    return (
      <div className="movie">
        <div className="movie_card">
          <img src={this.props.posterUrl} alt="movie poster" />
          <div className="movie_infos">
            <h3>{this.props.title.replace(/\_/gm, " ")}</h3>
            <p>By {this.props.director.replace(/\_/gm, " ")}</p>
            <div className="price">
              <p>Price :</p>
              <p>{price} €</p>
            </div>
            <button onClick={this.handleClick}>Book it</button>
          </div>
        </div>
        {this.state.showModal && (
          <div className="modal_container show_modal">
            <div className="modal_content">
              <div className="closebuttonconteneur">
                <img src="close.png" alt="****" onClick={this.handleClick} />
              </div>
              <div>
                <img src={this.props.posterUrl} alt="movie poster" />
                <h3>{this.props.title.replace(/\_/gm, " ")}</h3>
                <p>By {this.props.director.replace(/\_/gm, " ")}</p>
                <div className="price">
                  <p>Price :</p>
                  <p>{price} €</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Movies;
