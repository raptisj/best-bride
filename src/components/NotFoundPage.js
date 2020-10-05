import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  h1 {
    font-size: 50px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.orange.brand};
  }

  h2 {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 40px;
  background: ${(props) => props.theme.colors.orange.brand};
  color: #fff;
  padding: 0.4rem 1.2rem;
  border-radius: 4px;

  &:hover {
    background: ${(props) => props.theme.colors.orange.hover};
  }
`;

const NotFoundPage = (props) => {
  return (
    <ErrorMessage>
      <h1>
        <span role="img" aria-label="emoji">
          🧶
        </span>
        Lost your way sweety???
      </h1>
      <h2>The page you tried to reach does not exists. </h2>

      <StyledLink to="/">Back to Home</StyledLink>
    </ErrorMessage>
  );
};

export default NotFoundPage;
