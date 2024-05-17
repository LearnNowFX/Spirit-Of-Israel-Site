import fs from "fs";
import Joi from "joi";

export class EnvironmentManager {
  private static schema = Joi.object({
    VITE_API_URL: Joi.string().required(),
    VITE_EMAIL_ADDRESS: Joi.string().required(),
    VITE_IMAGE_CONTAINER: Joi.string().required(),
  });

  public static loadFile() {
    try {
      const data = fs.readFileSync("./.env", "utf8");

      if (!data) {
        return;
      }

      const lines = data.split("\n");

      lines.forEach((line) => {
        const [key, value] = line.split("=");

        if (!key || !value) {
          return;
        }

        console.log("Setting environment variable:", key);

        process.env[key] = value;
      });
    } catch (err) {
      console.log("No .env file found");
    }
    return [];
  }

  public static async validate() {
    this.schema
      .validateAsync(process.env, {
        abortEarly: false,
        allowUnknown: true,
      })
      .catch((err: unknown) => {
        if (err && err instanceof Joi.ValidationError) {
          console.log(err.details);
        }

        throw new Error("Missing Environment Variables");
      });

    return [];
  }
}
