import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../redux/slices/productSlice";

import Box from "@mui/material/Box";
import "./Product.css";

const Product = () => {
  const product = useSelector((state) => state.productReducer);
  // console.log(product.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  // console.log(product);
  return (
    <div class="productPages">
      <Box sx={{ height: "100vh" }}>
        <h2> All product {product?.product?.data?.length}</h2>
        {product?.product?.data?.map((product) => (
          <li key={product.id}> Name : {product.name}</li>
        ))}
      </Box>
    </div>
  );
};

export default Product;
