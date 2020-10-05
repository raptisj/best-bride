import React, { useEffect, useState } from "react";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import {
  getPaginatedAndFilterProducts,
  productsSelector,
  sortProducts,
} from "../redux/slices/products";
import GlobalSpinner from "../ui/GlobalLoader";

const ProductsContainer = (props) => {
  const dispatch = useDispatch();
  const { products, singleCategory, noPage, loading } = useSelector(
    productsSelector
  );

  const [filterType, setFilterType] = useState("price");

  const { id: categoryId } = props.match.params;

  const pageNumber = Number(queryString.parse(props.location.search).page) || 1;
  const minPrice =
    Number(queryString.parse(props.location.search).min_price) || 0;
  const maxPrice =
    Number(queryString.parse(props.location.search).max_price) ||
    1000000000000000;

  const sortQuery = queryString.parse(props.location.search).sort || null;
  const orderQuery = queryString.parse(props.location.search).order || null;

  useEffect(() => {
    if (noPage) {
      props.history.goBack();
    }

    dispatch(
      getPaginatedAndFilterProducts(
        categoryId,
        pageNumber,
        15,
        minPrice,
        maxPrice
      )
    );
  }, [
    dispatch,
    noPage,
    props.history,
    categoryId,
    pageNumber,
    minPrice,
    maxPrice,
  ]);

  useEffect(() => {
    dispatch(sortProducts(categoryId, sortQuery, orderQuery, pageNumber));
  }, [dispatch, categoryId, sortQuery, orderQuery, pageNumber]);

  if (loading || products === null || singleCategory === null || noPage)
    return <GlobalSpinner />;

  const highestRange = singleCategory.price_max / 100;
  const lowestRange = singleCategory.price_min / 100;

  const handleNextPage = () => {
    props.history.push(
      `/categories/${categoryId}/products?page=${
        pageNumber + 1
      }&min_price=${minPrice}&max_price=${maxPrice}`
    );
  };

  const handlePreviousPage = () => {
    props.history.push(
      `/categories/${categoryId}/products?page=${
        pageNumber - 1
      }&min_price=${minPrice}&max_price=${maxPrice}`
    );
  };

  const handleFinalChange = (values) => {
    props.history.replace(
      props.location.pathname +
        `?min_price=${values[0] * 100}&max_price=${values[1] * 100}`
    );
  };

  const handleSort = (type) => {
    setFilterType(type);

    props.history.replace(props.location.pathname + `?sort=${type}&order=desc`);
  };

  const handleOrder = (order) => {
    props.history.replace(
      props.location.pathname + `?sort=${filterType}&order=${order}`
    );
  };

  const rangeInitialState = () => {
    if (minPrice === 0) {
      return [lowestRange, highestRange];
    } else {
      return [minPrice / 100, maxPrice / 100];
    }
  };

  return (
    <Products
      singleCategory={singleCategory}
      products={products}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handleFinalChange={handleFinalChange}
      highestRange={highestRange}
      lowestRange={lowestRange}
      rangeInitialState={rangeInitialState}
      handleSort={handleSort}
      handleOrder={handleOrder}
      pageNumber={pageNumber}
      filterType={filterType}
    />
  );
};

export default ProductsContainer;
