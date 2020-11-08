import React from "react";
import { Padre1 } from "./Padre1";
import { Padre2 } from "./Padre2";

export class Abuelo extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.state = { bandera: false };
  }

  changeState = () => {
    this.setState({
      bandera: !this.state.bandera,
    });
  };

  render() {
    return <>{this.state.bandera ? <Padre2 /> : <Padre1 changeState={this.changeState} />}</>;
  }
}

