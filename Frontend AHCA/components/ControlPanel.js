import React, { PureComponent } from "react";

const defaultContainer = ({ children }) => (
  <div className="control-panel">{children}</div>
);

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        {/* <h3>Select The Area You Live</h3>
        <p>We can provide accurate quotes</p> */}
      </Container>
    );
  }
}
