import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="Footer">
      {" "}
      <h3>
        <AiFillTwitterSquare />
      </h3>
      <h3>
        <AiFillFacebook />
      </h3>
      <h3>
        <FaInstagramSquare />
      </h3>
      <h3>
        <AiFillLinkedin />
      </h3>
      <h3>
        <AiFillGithub />{" "}
      </h3>
    </div>
  );
}
