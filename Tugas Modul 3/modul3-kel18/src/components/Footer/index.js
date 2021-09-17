import React, { Component } from "react";
export default class Footer extends Component {
  state = {
    src: this.props.image2,
    name: "Lab Rekayasa Perangkat Lunak",
    position: "1",
  };
  changeSlider = () => {
    this.setState(() => {
      return {
        src: this.state.position == "2" ? this.props.image : this.props.image2,
        name:
          this.state.position == "2"
            ? this.props.author
            : "Lab Rekayasa Perangkat Lunak",
        position: this.state.position == "1" ? "2" : "1",
      };
    });
  };
  render() {
    return (
      <>
        <div
          className="flex flex-col items-center justify-center bg-gray-100 shadow-md pb-6"
          style={{ height: "200px" }}
        >
          <h3 className="pt-4 pb-3 font-bold text-xl">{this.props.quotes}</h3>
          <div className="flex flex-row">
            <button
              className="btn"
              style={{
                padding: "10px",
                margin: "15px",
              }}
              onClick={this.changeSlider}
            >
              &#10094;
            </button>
            <div className="flex flex-col">
              <img className="w-20 h-30 mx-auto mb-1" src={this.state.src}></img>
              <p style={{width: "230px", textAlign:"center", fontSize:"15px"}}>- {this.state.name} -</p>
            </div>
            <button
              className="btn"
              style={{
                padding: "10px",
                margin: "15px",
              }}
              onClick={this.changeSlider}
            >
              &#10095;
            </button>
          </div>
        </div>
      </>
    );
  }
}
