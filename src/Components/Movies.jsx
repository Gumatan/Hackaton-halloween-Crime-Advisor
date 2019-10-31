import React from "react";
import "./Movies.scss";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: "",
      select: "object",
      textarea: "",
      name: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTextarea = this.handleTextarea.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleClick() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleTextarea(event) {
    this.setState({ textarea: event.target.textarea });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleSelect(event) {
    this.setState({ select: event.target.select });
  }

  sayConfirm() {
    document.getElementById("reponseForm").style.display = "block";
    document.getElementById("formulaire").style.display = "none";
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
      case "Serial_killer":
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
              <div id="truc2truc">
                <div>
                  <img src={this.props.posterUrl} alt="movie poster" />
                  <h3>{this.props.title.replace(/\_/gm, " ")}</h3>
                  <p>By {this.props.director.replace(/\_/gm, " ")}</p>
                  <div className="price">
                    <p>Price :</p>
                    <p>{price} €</p>
                  </div>
                </div>
                <div id="formulaire">
                  <form>
                    <div className="top-form">
                      <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleName}
                        placeholder="Your Name..."
                        id="name"
                      />

                      <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        placeholder="Your email address...."
                        id="email"
                      />
                    </div>
                    <select
                      value={this.state.select}
                      onChange={this.handleSelect}
                      id="select"
                    >
                      <option value="object" id="object">
                        Your Categories ?
                      </option>
                      <option value="feedback">WTF</option>
                      <option value="feedback">Paranormal</option>
                      <option value="feedback">Serial killer</option>
                      <option value="feedback">Several</option>
                      <option value="question">Monstres</option>
                      <option value="bugQuestion">Brutal</option>
                    </select>

                    <textarea
                      type="text"
                      value={this.state.textarea}
                      onChange={this.handleTextarea}
                      placeholder="Your message...."
                      id="message"
                    />
                    <p onClick={this.sayConfirm}>Submit</p>
                  </form>
                </div>
                <p id="reponseForm">
                  Your request has been sent, a reply on your email will be sent
                  as soon as possible to arrange a date with you.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Movies;
