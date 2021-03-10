import React from 'react'
import Loader from "react-loader-spinner";
import '../App.css'
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Rings"
        color="#2d3436"
        height={100}
        width={100}
        timeout={15000}
        className="loader" //3 secs
      />
    );
  }
}