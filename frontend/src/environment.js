let IS_PROD = true;
const server = IS_PROD
  ? "https://nebuliix-backend.vercel.app"
  : "http://localhost:8000";

export default server;
