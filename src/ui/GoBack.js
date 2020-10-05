import React from "react";
import styled from "@emotion/styled";
import ArrowLeft from "../icons/ArrowLeft";
import { Link } from "react-router-dom";

const TopLink = styled.div`
  & > a {
    color: ${(props) => props.theme.colors.orange.brand};
    display: inline-flex;
    align-items: center;
    margin-bottom: 16px;

    svg {
      stroke: ${(props) => props.theme.colors.orange.brand};
      transition: all 0.3s;
    }

    &:hover {
      color: ${(props) => props.theme.colors.orange.hover};

      svg {
        stroke: ${(props) => props.theme.colors.orange.hover};
        transform: translateX(-4px);
        transition: all 0.3s;
      }
    }
  }
`;

const GoBack = ({ path = "/" }) => {
  return (
    <TopLink>
      <Link to={path}>
        <ArrowLeft width={26} height={26} />
        Go Back
      </Link>
    </TopLink>
  );
};

export default GoBack;
