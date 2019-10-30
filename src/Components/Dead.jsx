import React from "react";
import "./Dead.scss";
import Categories from "./Categories";
import Movies from "./Movies";
import Nav from "./Nav";

class Dead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: null
    };
  }
  render() {
    return (
      <div id="dead">
        <Nav />
        <div className="banner"></div>
        {!this.state.click ? <Categories /> : <Movies />}
        {}
      </div>
    );
  }
}
export default Dead;
