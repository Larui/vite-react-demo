export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "/api/extcontent"
    : "/api/extcontent";
