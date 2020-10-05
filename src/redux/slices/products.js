import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// base url
let url = "https://bp-interview.herokuapp.com";

export const initialState = {
  loading: false,
  categories: null,
  singleCategory: null,
  products: null,
  singleProduct: null,
  noPage: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadCategories: (state) => {
      state.loading = true;
    },

    loadProducts: (state) => {
      state.loading = true;
    },

    getAllCategoriesSuccess: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
      state.singleCategory = null;
      state.products = null;
    },

    getSingleCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.singleCategory = payload;
    },

    getAllProductsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
      state.noPage = payload.length === 0;
    },

    getSingleProductSuccess: (state, { payload }) => {
      state.loading = false;
      state.singleProduct = payload;
    },

    categoriesFailure: (state) => {
      state.loading = false;
    },

    productsFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  loadCategories,
  loadProducts,
  getAllCategoriesSuccess,
  getSingleCategorySuccess,
  getAllProductsSuccess,
  getSingleProductSuccess,
  getFullProductList,
  categoriesFailure,
  productsFailure,
} = productsSlice.actions;

export const productsSelector = (state) => state.products;
export default productsSlice.reducer;

/**
 *
 *  ALL CATEGORIES
 */
export const getAllCategories = () => async (dispatch) => {
  dispatch(loadCategories());

  let apiUrl = `${url}/categories`;

  try {
    const res = await axios.get(apiUrl);

    dispatch(getAllCategoriesSuccess(res.data));
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        dispatch(categoriesFailure());
      } else {
        dispatch(categoriesFailure());
      }
    }
  }
};

/**
 *
 *  SINGLE CATEGORIES
 */
export const getSingleCategory = (id) => async (dispatch) => {
  let apiUrl = `${url}/categories/${id}`;

  try {
    const res = await axios.get(apiUrl);

    dispatch(getSingleCategorySuccess(res.data));
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        dispatch(categoriesFailure());
      } else {
        dispatch(categoriesFailure());
      }
    }
  }
};

// /**
//  *
//  *  SORT PRODUCTS
//  */
export const sortProducts = (id, filterType, orderQuery, page) => async (
  dispatch
) => {
  dispatch(loadCategories());

  let apiUrl = `${url}/categories/${id}/products?page=${page}&limit=15&sort=${filterType}&order=${orderQuery}`;

  try {
    const res = await axios.get(apiUrl);

    dispatch(getAllProductsSuccess(res.data));
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        dispatch(loadProducts());
      } else {
        dispatch(loadProducts());
      }
    }
  }
};

/**
 *
 *  FILTER AND PAGINATE PRODUCTS
 */
export const getPaginatedAndFilterProducts = (
  id,
  page = 1,
  limit = 15,
  minPrice,
  maxPrice
) => async (dispatch) => {
  let apiUrl = `${url}/categories/${id}/products?page=${page}&limit=${limit}&min_price=${minPrice}&max_price=${maxPrice}`;

  try {
    const { data } = await axios.get(apiUrl);

    dispatch(getAllProductsSuccess(data));
    dispatch(getSingleCategory(id));
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        dispatch(productsFailure());
      } else {
        dispatch(productsFailure());
      }
    }
  }
};

/**
 *
 *  SINGLE CATEGORIES
 */
export const getSingleProduct = (id) => async (dispatch, getState) => {
  dispatch(loadCategories());

  let apiUrl = `${url}/products/${id}`;

  try {
    const res = await axios.get(apiUrl);

    dispatch(getSingleProductSuccess(res.data));
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        dispatch(productsFailure());
      } else {
        dispatch(productsFailure());
      }
    }
  }
};
