import React, { useState } from 'react';

const hocFunction = (HocComponent, initialCount = 0) => {
  return class hocFunction extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likeCounter: initialCount,
      };
    }

    handleLikeCount = () => {
      this.setState((prevState) => ({
        likeCounter: prevState.likeCounter + 1,
      }));
    };

    render() {
      return (
        <>
        <HocComponent
          {...this.props}
          likeCounter={this.state.likeCounter}
          handleLikeCount={this.handleLikeCount}
        /></>
      );
    }
  };
};

export default hocFunction;