import axios, { AxiosInstance } from "axios";
import { IContact } from "src/interfaces/contact.interface";

export class ContactService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api`,
    });
  }

  public getContact = async (): Promise<IContact | null> => {
    return await this.api
      .get("/contact.json")
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
  };
}

export const contactService = new ContactService();
