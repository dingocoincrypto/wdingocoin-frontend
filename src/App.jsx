import "./App.scss";
import BscController from "./BscController";
import SolController from "./SolController";
import React from "react";
import ReactGA from "react-ga";

import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  DropdownButton,
  Row
} from "react-bootstrap";
import DingocoinLogo from "./assets/img/wDingocoin.png";
import MaintLogo from "./assets/img/Comp-1_1.gif";

import { BrowserRouter as Router } from "react-router-dom";
import Maintenance from "./Maintenance";

export default function App() {
  
  const [controller, setController] = React.useState(null);

{/*
  ReactGA.initialize("UA-210617812-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [location, setLocation] = React.useState(null);
  React.useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  React.useEffect(() => {}, [location]);
*/}

  // Maint Mode Toggle
  
  {/* Maint Mode Toggle -- true = on  | false = off */}

  const maintenance = true;  {/*  < --- Toggle On|Off Here.  */}
  return (
    <Router>
      {maintenance ? (
        <Maintenance />
      ) : (
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
            <div className="mt-4"></div> 
          </Row> <br />
        </Container>
        <Container>
          <Row>
            <h1 className="mt-4">wDingocoin Custodian</h1> <br /><br /><br /> 
          </Row>
          <Row>
            <div className="header-logos">
              <img src="wDingocoin.png" alt="wDingocoin Logo"></img>
              <span>&nbsp;⇌&nbsp;</span>
              <img src="Dingocoin.png" alt="Dingocoin Logo"></img>
            </div> <br />
          </Row> <br /> 
          <Row>
            <p className="mb-0">
              1 wDingocoin = 1{" "}
              <a target="_blank" href="https://dingocoin.org" rel="noreferrer">
                Dingocoin
              </a>
            <br /> 
            <br />
            <p>Select Network Below</p>
            <br />
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
          <br /> <br />
          </Row> <br /><br /><br /><br />
        
        </Container>
      </header> 
      {controller === "bsc" && <BscController />}
      {controller === "sol" && <SolController />}
      <section className="section-footer">
        <h6> Copyright © The Dingocoin Project 2022 </h6>
      </section>
    </div>
      )}
    </Router>
  );
}
