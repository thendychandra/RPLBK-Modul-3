import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Gambar from "./assets/images/logo.png";
import Logo from "./assets/images/undip.png";

const header = "Selamat Datang di Praktikum RPLBK";
const header_desc = "Berikut daftar peserta dan kelompok masing-masing";
const footer = "Praktikum RPLBK 2021";

ReactDOM.render(
  <React.StrictMode>
    <Header header={header} header_desc={header_desc} image={Gambar} />
    <App />
    <Footer author="Universitas Diponegoro" image={Logo} image2={Gambar} quotes={footer} />
  </React.StrictMode>,
  document.getElementById("root")
);
