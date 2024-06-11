import {
  filterProducts,
  extractDistinctCategories,
} from "src/utilities/product.utility";
import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { useStyles } from "./Products.style";
import { Grid, Typography } from "@mui/material";
import Product from "src/components/product/product";
import { IProduct } from "src/interfaces/product.interface";
import { toProperCase } from "src/utilities/string.utility";
import { productService } from "src/services/product.service";
import { cachePromiseInLocalStorage } from "src/utilities/browser.utility";
import { ALL_CATEGORIES_OPTION } from "src/constants/category.constant";

const Products = () => {
  const styles = useStyles();
  const [filter, setFilter] = React.useState<Partial<IProduct>>({});

  const { data: products } = useQuery<IProduct[] | null>({
    staleTime: Infinity,
    queryKey: "products",
    queryFn: () =>
      cachePromiseInLocalStorage("products", productService.getAll),
  });

  const categories = useMemo(
    () => extractDistinctCategories(products || []),
    [products]
  );

  const filteredProducts = useMemo(
    () => products && filterProducts(products, filter),
    [products, filter]
  );

  return (
    <>
      <div style={styles.container}>
        <Typography style={styles.title}>Products</Typography>
        <div style={styles.filterContainer}>
          <button
            onClick={() => setFilter({})}
            style={styles.filterButton({ isSelected: !filter.category })}
          >
            {ALL_CATEGORIES_OPTION}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter({ category })}
              style={styles.filterButton({
                isSelected: filter.category === category,
              })}
            >
              {category}
            </button>
          ))}
        </div>
        <Grid container spacing={3} style={styles.gridContainer}>
          {filteredProducts?.map((product) => (
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
