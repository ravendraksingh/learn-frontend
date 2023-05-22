import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-row">
        <Navbar
          bg="white"
          variant="light"
          expand="md"
          collapseOnSelect
          className="navbar nav__collapsed d-flex flex-fill justify-content-between"
          style={{ backgroundColor: "white" }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand className="mx-2 mx-sm-0 fs-1 fw-bolder brand">
            sneakers
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-md-5">
              <Nav.Link href="#">Collections</Nav.Link>
              <Nav.Link href="#">Men</Nav.Link>
              <Nav.Link href="#">Women</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* <div className="d-flex flex-row justify-content-end align-items-center"> */}
      <div className="avatar-box">
        <AiOutlineShoppingCart size={24} className="mx-2" />
        <img
          src={process.env.PUBLIC_URL + "/images/image-avatar.png"}
          height="36px"
        />
      </div>
    </div>
  );
};

export default Header;
