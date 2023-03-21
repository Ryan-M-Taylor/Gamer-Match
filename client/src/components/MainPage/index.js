import React from "react";
import backgroundImage from "../../components/pic2.jpg";

const MainPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10%",
      }}
    >
      
      <div style={{ width: "25%", backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
        <h1> hard-coded stuff </h1>
          <p> hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
      </div>
      <div style={{ width: "25%", backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
      <h1> hard-coded stuff </h1>
          <p >hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
      </div>
      <div style={{ width: "25%", backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
      <h1> hard-coded stuff </h1>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
          <p>hard-coded stuff</p>
      </div>
    </div>
  );
};

export default MainPage;