import { z } from "zod";

function isValidUrl(value: string): boolean {
  try {
    // Accept absolute URLs for backend API host configuration.
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

const EnvSchema = z.object({
  VITE_API_BASE_URL: z
    .string()
    .trim()
    .default("")
    .refine((value) => value === "" || isValidUrl(value), {
      message: "VITE_API_BASE_URL must be an empty string or a valid absolute URL",
    })
    .transform((value) => value.replace(/\/+$/, "")),
});

export type Env = z.infer<typeof EnvSchema>;

export function parseEnvConfig(input: unknown): Env {
  return EnvSchema.parse(input);
}

export const env = parseEnvConfig(import.meta.env);
