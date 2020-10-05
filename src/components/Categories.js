import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../ui/CategoryCard";
import { getAllCategories, productsSelector } from "../redux/slices/products";
import GlobalSpinner from "../ui/GlobalLoader";
import { sortCategories } from "../utils/helperFunctions";

const Header = styled.header`
  h1 {
    font-size: 30px;
  }
`;

const Categories = ({ guests }) => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  if (loading || categories === null) return <GlobalSpinner />;

  return (
    <Box p="32px" margin="0 auto" maxWidth="1280px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="32px"
      >
        <Header>
          <h1>Brides Categories</h1>
          <p>
            Let the bride choose anything she likes. We have an overwhelming
            amount of products across many categories. Now you can enjoy beer at
            last.
            <span role="img" aria-label="emoji">
              🍺 🍺 🍺
            </span>
          </p>
        </Header>
      </Box>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap="16px"
      >
        {sortCategories(categories).map((category, i) => (
          <Link to={`/categories/${category.id}/products`} key={i}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
