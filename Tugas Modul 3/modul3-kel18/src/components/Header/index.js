import React, { Component } from "react";
export default class Quotes extends Component {
  state = {
    txt: "hidden",
    txtBtn: "btn btn-success",
    isDark: true,
  };
  showList = () => {
    this.setState(() => {
      return {
        txt: "text-center text-gray-700 font-normal",
        txtBtn: "hidden",
        isDark: false,
      };
    });
  };
  render() {
    return (
      <div className="C">
        <div
          className={
            this.state.isDark
              ? "flex items-center justify-center bg-indigo-400"
              : "flex items-center justify-center bg-gray-100"
          }
          style={{ height: "100vh" }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            <span className="block">{this.props.header}</span>
            <img className="mx-auto mt-7 mb-7" src={this.props.image}></img>
            <span className="block text-indigo-400">Modul 3</span>
            <span className="block text-indigo-400 mb-10">
              REACT STATE and LIFECYCLE
            </span>
            <p className={this.state.txt}>{this.props.header_desc}</p>
            <button
              className={this.state.txtBtn}
              style={{
                padding: "10px",
                marginTop: "70px",
              }}
              onClick={this.showList}
            >
              Cek Kelompok !
            </button>
          </h2>
        </div>
      </div>
    );
  }
}
