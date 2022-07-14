import React, { Component } from "react";
import Nav from "./Components-TrangChu/Nav";
import Slider from "./Components-TrangChu/Slider";
import Content from "./Components-TrangChu/Content";
import Content2 from "./Components-TrangChu/Content2";
import Footer from "./Components-TrangChu/Footer";
import NavUser from "./ComponentUser/NavUser";

class HomeUser extends Component {
  render() {
    return (
      <>
        <NavUser />

        <Slider />

        <Content />

        <Content2 />

        <Footer />
      </>
    );
  }
}

export default HomeUser;
