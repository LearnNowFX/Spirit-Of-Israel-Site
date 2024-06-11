import { IProduct } from "src/interfaces/product.interface";

export const extractDistinctCategories = (products: IProduct[]) => {
  const categories = new Set<string>();

  products.forEach((product) => {
    categories.add(product.category);
  });

  return Array.from(categories);
};

export const filterProducts = (
  products?: IProduct[],
  filter?: Partial<IProduct>
) => {
  if (!products || !filter) {
    return products;
  }

  return products.filter((product) => {
    return Object.entries(filter).every(([key, value]) => {
      return product[key as keyof IProduct] === value;
    });
  });
};
