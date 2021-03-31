import React from "react";
import "./css/main.scss";

import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
import Realtors from "./UI/Realtors";
import Features from "./UI/Features";
import Story from "./UI/Story";
import Homes from "./UI/Homes";
import Footer from "./UI/Footer";

function App() {
  return (
    <body className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Footer />
    </body>
  );
}

export default App;
