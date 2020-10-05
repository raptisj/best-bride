import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct, productsSelector } from "../redux/slices/products";
import GoBack from "../ui/GoBack";
import { centsToEuro } from "../utils/helperFunctions";
import GlobalSpinner from "../ui/GlobalLoader";
import { Helmet } from "react-helmet";

const InfoCard = styled(Box)`
  background: #fff;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 4px 3px 5px rgba(0, 0, 0, 0.15);

  h3 {
    color: ${(props) => props.theme.colors.green.brand};
  }

  p:last-child {
    color: #718096;
    font-size: 0.875rem;
    margin-top: auto;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #e6e6e6;
  margin: 2rem 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    font-size: 34px;

    @media (max-width: 568px) {
      font-size: 22px;
    }
  }

  h2 + p {
    font-size: 20px;
    font-weight: 600;
  }
`;

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const { singleProduct, loading } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  if (loading || singleProduct === null) return <GlobalSpinner />;

  const {
    category_id,
    title,
    image_url,
    price,
    excerpt,
    description,
  } = singleProduct;

  const { categoryPath } = props.location.state || {
    categoryPath: `/categories/${category_id}/products/`,
  };

  return (
    <Box p="32px" margin="0 auto" maxWidth="1280px">
      <Helmet title={`BestBride - ${title}`} />
      <GoBack path={categoryPath} />
      <Grid
        templateColumns={["1fr", "1fr", "1fr  1fr"]}
        gap="16px"
        p="40px"
        bg="#fff"
        borderRadius="4px"
      >
        <Box w="100%" maxHeight="500px">
          <img
            src={image_url}
            alt="user"
            style={{
              display: "flex",
              borderRadius: "4px",
              margin: "0 auto",
              maxHeight: "500px",
            }}
          />
        </Box>
        <InfoCard p="16px" display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" h="100%" pb="16px">
            <Header>
              <div>
                <h2>{title}</h2>
                <p>{centsToEuro(price)}</p>
                <Divider />
                <p>{excerpt}</p>
                <p>{description}</p>
              </div>
            </Header>
          </Box>
          <Box mt="auto" textAlign="right"></Box>
        </InfoCard>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
