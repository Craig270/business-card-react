import React from "react";
import { MdEmail } from "react-icons/md";
export default function About() {
  return (
    <div className="About">
      <h1>Craig Neff</h1>
      <h2>Frontend Developer</h2>
      <p>craigneff.website</p>
      <button type="button" className="email-btn">
        <MdEmail /> Email
      </button>
    </div>
  );
}
