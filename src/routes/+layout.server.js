export function load() {
  return {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID
  };
}