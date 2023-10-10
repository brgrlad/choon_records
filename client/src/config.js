export const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:4004/"
    : "https://frail-erin-crane.cyclic.app";