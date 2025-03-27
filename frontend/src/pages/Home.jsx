import React from "react";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Header from "./../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
    </div>
  );
};

export default Home;
