import axios, { AxiosInstance } from "axios";
import { IAbout } from "src/interfaces/about.interface";
export class AboutService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
    });
  }

  public getAbout = async (): Promise<IAbout | null> => {
    return await this.api
      .get("/about.json")
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
}

export const aboutService = new AboutService();
