import React from "react";
import {
  HomeContainerStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserContainerStyled,
} from "./NavbarStyles";
import { motion } from "framer-motion";
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
          <motion.div whileTap={{ scale: 1.2 }}>
            <a href="#">
              <LinkContainerStyled home>Icono</LinkContainerStyled>
            </a>
          </motion.div>
        </HomeContainerStyled>
        <UserContainerStyled>stilo</UserContainerStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}
