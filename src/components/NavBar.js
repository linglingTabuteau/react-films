import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" >
        <NavbarBrand href="/" className="mr-auto">
        Particeep React Interview
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">TOUS LES FILMS</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
