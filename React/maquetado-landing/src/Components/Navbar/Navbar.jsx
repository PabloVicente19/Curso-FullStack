import React from "react";
import {
  HomeContainerStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
} from "./NavbarStyles";

export default function Navbar() {
  return (
    <NavbarContainerStyled>
      <div>
        <a href="#">
          <img
            src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png"
            alt="Logo"
          ></img>
        </a>
      </div>
      <LinksContainerStyled>
        <HomeContainerStyled>
          <a href="#">
            <LinkContainerStyled>Icono</LinkContainerStyled>
          </a>
          home
        </HomeContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}
