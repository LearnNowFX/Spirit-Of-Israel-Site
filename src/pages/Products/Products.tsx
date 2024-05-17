import React from "react";
import { useQuery } from "react-query";
import { useStyles } from "./Products.style";
import { Grid, Typography } from "@mui/material";
import Product from "src/components/product/product";
import { IProduct } from "src/interfaces/product.interface";
import { productService } from "src/services/product.service";
import { cachePromiseInLocalStorage } from "src/utilities/browser.utility";

const Products = () => {
  const styles = useStyles();
  const { data: products } = useQuery<IProduct[] | null>({
    staleTime: Infinity,
    queryKey: "products",
    queryFn: () =>
      cachePromiseInLocalStorage("products", productService.getAll),
  });

  return (
    <>
      <div style={styles.container}>
        <Typography style={styles.title}>Products</Typography>
        <Grid container spacing={3} style={styles.gridContainer}>
          {products?.map((product) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              key={product.name}
              style={styles.gridItem}
            >
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default React.memo(Products);
