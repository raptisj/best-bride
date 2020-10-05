import React from "react";
import { Box } from "@chakra-ui/core";
import styled from "@emotion/styled";

const Card = styled(Box)`
  border: none;
  width: 100%;
  height: 250px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: all 0.3s;
  display: grid;
  grid-template-rows: 1fr 48px;
  border: ${(props) => `1px solid ${props.theme.colors.gray.soft}`};

  img {
    transform: scale(1);
    transition: all 0.3s;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  &:hover {
    box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    border: ${(props) => `1px solid ${props.theme.colors.green.brand}`};

    img {
      transform: scale(1.019);
      transition: all 0.3s;
    }

    h2 {
      color: ${(props) => props.theme.colors.green.brand};
    }
  }
`;

const ImageBox = styled.div`
  position: relative;

  img {
    height: 180px;
    margin: 0 auto;
    display: block;
    padding: 16px;
    object-fit: contain;
  }

  span {
    position: absolute;
    top: 15px;
    left: 0px;
    background: #f6f8f9;
    padding: 10px;
    border-radius: 0 4px 4px 0;
    color: ${(props) => props.theme.colors.green.brand};
    font-weight: 600;
  }
`;

const CategoriesCard = ({ category }) => {
  const { title, image_url } = category;

  return (
    <Card>
      <ImageBox>
        <img src={image_url} alt={title} />
      </ImageBox>
      <Box textAlign="center">
        <h2>{title}</h2>
      </Box>
    </Card>
  );
};

export default CategoriesCard;
