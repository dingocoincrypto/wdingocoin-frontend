import "./App.scss";
import BscController from "./BscController";
import SolController from "./SolController";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  DropdownButton,
  Row
} from "react-bootstrap";
import DingocoinLogo from "./assets/img/dingocoin.png";
import React from "react";

function App() {
  const [controller, setController] = React.useState(null);

  return (
    <div className="App">
      <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img alt="" src={DingocoinLogo} />
            <span>DINGOCOIN</span>
            <span className="navbar-brand-subtitle"> WRAP</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link
                href="https://www.dingocoin.org"
                target="_blank"
                rel="noreferrer"
              >
                <b>Visit Dingocoin</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <Container>
          <Row>
            <h1 className="mt-4">wDingocoin Custodian</h1>
          </Row>
          <Row>
            <div className="header-logos">
              <img src="wDingocoin.png" alt="wDingocoin Logo"></img>
              <span>&nbsp;⇌&nbsp;</span>
              <img src="Dingocoin.png" alt="Dingocoin Logo"></img>
            </div>
          </Row>
          <Row>
            <p className="mb-0">
              1 wDingocoin = 1{" "}
              <a target="_blank" href="https://dingocoin.org" rel="noreferrer">
                Dingocoin
              </a>
            </p>
          </Row>
          <Row>
            <DropdownButton
              title={
                controller === null
                  ? "Select Wrapped Network"
                  : controller === "bsc"
                  ? "Binance Smart Chain (BSC)"
                  : "Solana (SOL)"
              }
              className="mb-2"
            >
              <Dropdown.Item
                onClick={() => {
                  setController("bsc");
                }}
              >
                Binance Smart Chain (BSC)
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setController("sol");
                }}
              >
                Solana (SOL)
              </Dropdown.Item>
            </DropdownButton>
          </Row>
        </Container>
      </header>

      {controller === "bsc" && <BscController />}
      {controller === "sol" && <SolController />}

      <section className="section-footer">
        <h6>
          Copyright © The Dingocoin Project 2021
        </h6>
      </section>
    </div>
  );
}

export default App;
