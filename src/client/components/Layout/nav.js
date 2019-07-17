import Link from "next/link";
import Router from "next/router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const rightLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const HeaderMenu = () => (
  <>
    <Navbar
      className="fixed-top"
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
    >
      <span
        className="d-lg-none"
        style={{ color: "white", marginRight: "5px" }}
        onClick={() => Router.back()}
      >
        <i className="fas fa-arrow-left" />
      </span>
      <Link href="/" passHref>
        <Navbar.Brand>MBND</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {rightLinks.map(({ key, href, label }) => (
            <Link href={href} key={key} passHref>
              <Nav.Link>{label}</Nav.Link>
            </Link>
          ))}

          <Link
            href={{ pathname: "/bangtin/2", query: { id: "2" } }}
            as="/bangtin"
            passHref
          >
            <Nav.Link>Bang Tin</Nav.Link>
          </Link>
          <Link href="/bangtin/2/ThanhTung" passHref>
            <Nav.Link>bangtin/2/ThanhTung</Nav.Link>
          </Link>
          <Link href="/bangtin/vkyeu/MyDung" passHref>
            <Nav.Link>angtin/vkyeu/MyDung</Nav.Link>
          </Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default HeaderMenu;
