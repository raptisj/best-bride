import React from "react";
import "./App.css";
import theme from "./theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import Navigation from "./ui/Navigation";
import Categories from "./components/Categories";
import ProductsContainer from "./components/ProductsContainer";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/products/:id/:slug" component={SingleProduct} />
          <Route
            exact
            path="/categories/:id/products"
            component={ProductsContainer}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
