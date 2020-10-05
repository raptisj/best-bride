import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import ProductCard from "../ui/ProductCard";
import RangeSlider from "../ui/RangeSlider";
import GoBack from "../ui/GoBack";
import { Helmet } from "react-helmet";

const RangeSliderBox = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 8px;
    font-weight: 600;
  }

  & > div {
    width: 415px;

    @media (max-width: 568px) {
      width: 300px;
    }
  }

  @media (max-width: 1199px) {
    margin-top: 24px;
  }

  @media (max-width: 568px) {
    margin-top: 32px;
  }
`;

const CategoryName = styled.div`
  display: flex;

  h1 {
    font-size: 25px;
    font-weight: 600;
    margin-right: 16px;
  }

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Products = ({
  singleCategory,
  products,
  pageNumber,
  handleNextPage,
  handlePreviousPage,
  handleFinalChange,
  highestRange,
  lowestRange,
  handleSort,
  rangeInitialState,
  handleOrder,
  filterType,
}) => {
  const [rangeValues, setRangeValues] = useState(rangeInitialState());

  const handleChange = (value) => {
    setRangeValues(value);
  };

  let { pathname: categoryPath } = useLocation() || { pathname: "/" };

  return (
    <Box p="32px" margin="0 auto" maxWidth="1280px">
      <Helmet title={`BestBride - ${singleCategory.title}`} />
      <GoBack path="/" />

      <Box
        display="flex"
        alignItems={["start", "start", "center"]}
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
        mb="32px"
        pr="16px"
      >
        <CategoryName>
          <h1>{singleCategory.title}</h1>
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon="chevron-down">
                Ταξινόμηση ανα
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleSort("title")}>'Ονομα</MenuItem>
                <MenuItem onClick={() => handleSort("price")}>Τιμή</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <div style={{ marginLeft: "8px" }}>
            <Menu>
              <MenuButton as={Button} rightIcon="chevron-down">
                Σειρά
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleOrder("asc")}>
                  {filterType === "price" ? "Φθηνότερα" : "Πρώτα / ASC"}
                </MenuItem>
                <MenuItem onClick={() => handleOrder("desc")}>
                  {filterType === "price" ? "Αρκιβότερα" : "Τελευταία / DESC"}
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </CategoryName>

        <RangeSliderBox>
          <p>Τιμή</p>
          <RangeSlider
            handleFinalChange={handleFinalChange}
            handleChange={handleChange}
            lowestRange={lowestRange}
            highestRange={highestRange}
            rangeValues={rangeValues}
          />
        </RangeSliderBox>
      </Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
        gap="16px"
      >
        {products.map((product, i) => (
          <Link
            to={{
              pathname: `/products/${product.slug_path}`,
              state: {
                categoryPath,
              },
            }}
            key={i}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </Grid>
      <Box display="flex" justifyContent="space-between" mt="32px">
        <Button
          disabled={pageNumber === 1}
          onClick={() => handlePreviousPage()}
        >
          Προηγούμενη
        </Button>
        <Button
          disabled={products.length < 15}
          onClick={() => handleNextPage()}
        >
          Επόμενη
        </Button>
      </Box>
    </Box>
  );
};

export default Products;
