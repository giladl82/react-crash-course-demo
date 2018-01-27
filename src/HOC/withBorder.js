import React, { Compoent } from 'react'

export const withBorder = (color, overColor) => WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        borderColor: color
      };
    }

    handleMouseOver = () => {
      this.setState({
        borderColor: overColor
      })
    }

    handleMouseOut = () => {
      this.setState({
        borderColor: color
      })
    }

    render() {
      const style = {
        padding: '15px',
        border: `solid 2px ${this.state.borderColor}`
      }

      return (<
        div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        style={style}>
        <WrappedComponent  {...this.props} />
      </div>
      );
    }
  };
}