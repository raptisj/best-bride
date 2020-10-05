import React from "react";
import { Box } from "@chakra-ui/core";
import styled from "@emotion/styled";

const Card = styled(Box)`
  border: none;
  width: 100%;
  height: 280px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: all 0.3s;
  display: grid;
  grid-template-rows: 1fr 72px;
  border: ${(props) => `1px solid ${props.theme.colors.gray.soft}`};
  padding: 8px;

  img {
    transform: scale(1);
    transition: all 0.3s;
  }

  h2 {
    font-size: 17px;
    color: ${(props) => props.theme.colors.black.soft};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
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
`;

const ProductCard = ({ product }) => {
  const { title, image_url, price } = product;

  const centsToEuro = (cents) => {
    let newFormat = cents / 100;
    return (newFormat = newFormat.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    }));
  };

  return (
    <Card>
      <ImageBox>
        <img src={image_url} alt={title} />
      </ImageBox>
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <h2>{title}</h2>
        <span>{centsToEuro(price)}</span>
      </Box>
    </Card>
  );
};

export default ProductCard;
