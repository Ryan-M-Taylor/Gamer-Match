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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>STUUUUUUUFFFFFFFF</h1>
    </div>
  );
};

export default MainPage;
