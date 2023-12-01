import { config } from "dotenv";

config({ path: ".env" });

class ConfigService {
  getToken(): string {
    return process.env.TOKEN!;
  }
}

export const Config = new ConfigService();
