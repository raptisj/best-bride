import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  background: #fff;
  height: 72px;
  padding: 0 32px;
  border-bottom: 1px solid #dde2e6);
  box-shadow: 0 1px 6px 0 #dde2e6;

  & > div {
    position: relative;
  }

  & > div > a {
    color: #333;
    padding: 0 8px;
    position: relative;
  }

  & > div > a:hover {
    color: #333;
  }
`;

const LogoLink = styled(Link)`
  &:hover {
    color: initial;
  }

  &:active {
    transform: translateY(1px);
  }

  & a:hover::after {
    display: none;
  }

  span {
    font-size: 30px;
    font-weight: 700;
  }

  span:first-of-type {
    color: ${(props) => props.theme.colors.green.brand};
  }

  span:last-of-type {
    color: ${(props) => props.theme.colors.black.soft};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <LogoLink to="/">
        <span>Best</span>
        <span>Bride</span>
      </LogoLink>
    </Nav>
  );
};

export default Navigation;
