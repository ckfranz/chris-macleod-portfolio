// Step 1: Import React
import * as React from "react";

import MainHeader from "../components/Nav/MainHeader";
import Footer from "../components/Footer";
import PromoBanner from "./PromoBanner";

// import "./index.css";

// Step 2: Define your component
const layout = ({ children }) => {
  return (
    <div className="App">
      <div className="asset-container">
        {/* <PromoBanner /> */}
        <MainHeader />
        {children}
        <Footer />
      </div>
    </div>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default layout;
