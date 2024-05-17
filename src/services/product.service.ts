import axios, { AxiosInstance } from "axios";
import { IProduct } from "src/interfaces/product.interface";

export class ProductService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
    });
  }

  public getAll = async (): Promise<IProduct[]> => {
    return await this.api
      .get("/products.json")
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return [];
      });
  };
}

export const productService = new ProductService();
