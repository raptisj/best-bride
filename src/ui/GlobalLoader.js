import React from "react";
import { Spinner, Box } from "@chakra-ui/core";
import theme from "../theme";

const GlobalSpinner = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      p="32px"
    >
      <Spinner
        thickness="6px"
        speed="0.95s"
        emptyColor="#f5f7f8"
        color={theme.colors.orange.brand}
        size="7rem"
      />
    </Box>
  );
};

export default GlobalSpinner;
