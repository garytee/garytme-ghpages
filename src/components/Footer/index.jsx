import React from "react";
import { FooterWrapper, FooterContent } from "./styled";

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      © {new Date().getFullYear()} - Gary Tietjen - Built with {` `}{" "}
      <a target="_blank" href="https://www.gatsbyjs.org">
        Gatsby.js
      </a>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
