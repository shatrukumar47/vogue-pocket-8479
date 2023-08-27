import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Pagination = ({ totalPages, handlePageClick, page }) => {
  const [pageArr, setPageArr] = useState(
    new Array(totalPages).fill().map((_, index) => index + 1)
  );
  return (
    <HStack spacing={"20px"} justifyContent={"center"}>
      {pageArr?.map((item) => {
        return (
          <Button
            key={item}
            colorScheme="red"
            bg={item === page ? "red" : "black"}
            onClick={() => handlePageClick(item)}
          >
            {item}
          </Button>
        );
      })}
    </HStack>
  );
};

export default Pagination;
