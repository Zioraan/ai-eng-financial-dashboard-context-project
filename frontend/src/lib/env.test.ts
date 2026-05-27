import { describe, expect, it } from "vitest";
import { parseEnvConfig } from "./env";

describe("parseEnvConfig", () => {
  it("accepts an empty API base URL", () => {
    const result = parseEnvConfig({ VITE_API_BASE_URL: "" });

    expect(result.VITE_API_BASE_URL).toBe("");
  });

  it("normalizes valid URLs by trimming trailing slashes", () => {
    const result = parseEnvConfig({
      VITE_API_BASE_URL: "https://api.example.com///",
    });

    expect(result.VITE_API_BASE_URL).toBe("https://api.example.com");
  });

  it("rejects invalid URLs", () => {
    expect(() =>
      parseEnvConfig({
        VITE_API_BASE_URL: "not-a-url",
      }),
    ).toThrow();
  });
});
