import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "f1y1t07j",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
