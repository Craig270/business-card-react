import React from "react";
import ProfilePic from "./ProfilePic";
import About from "./About";
import Me from "./Me";
import Footer from "./Footer";
import Interests from "./Interests";

export default function Info() {
  return (
    <div className="bobross">
      <div className="paint">
        <ProfilePic />
        <About />
        <Me />
        <Interests />
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
