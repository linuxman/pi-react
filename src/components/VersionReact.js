import React from "react";

class ReactVersion extends React.Component {
  render() {
    return (
      <div>
        <h3>Versión de React</h3>
        <p>{React.version}</p>
      </div>
    );
  }
}

export default ReactVersion;
