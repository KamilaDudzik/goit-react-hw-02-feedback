// import { Component } from "react";
import { Statistics } from "./Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Statistics>
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
      </Statistics>
    </div>
  );
};
 